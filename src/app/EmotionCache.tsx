'use client';

import React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';

export function NextAppDirEmotionCacheProvider(props: { options: Parameters<typeof createCache>[0]; children: React.ReactNode }) {
  const { options, children } = props;

  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    let inserted: { name: string; isGlobal: boolean }[] = [];
    const originalInsert = cache.insert;
    cache.insert = (...args) => {
      const [selector, serialized] = args;
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push({
          name: serialized.name,
          isGlobal: selector === '',
        });
      }
      return originalInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const inserted = flush();
    if (inserted.length === 0) {
      return null;
    }

    let styles = '';
    let dataEmotionKey = cache.key + ' ';

    inserted.forEach(({ name, isGlobal }) => {
      const style = cache.inserted[name];
      if (typeof style === 'boolean' || style === undefined) return;

      if (isGlobal) {
        return (
          <style
            key={name}
            data-emotion={`${cache.key}-global ${name}`}
            dangerouslySetInnerHTML={{ __html: style }}
          />
        );
      }

      styles += style;
      dataEmotionKey += `${name} `;
    });

    return (
      <style
        data-emotion={dataEmotionKey.trim()}
        dangerouslySetInnerHTML={{ __html: styles || '' }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
