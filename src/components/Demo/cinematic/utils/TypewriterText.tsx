import React from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  React.useEffect(() => {
    setDisplayText('');
    setIndex(0);
  }, [text]);

  return <span>{displayText}</span>;
};
