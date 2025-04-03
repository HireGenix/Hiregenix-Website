import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HireGenix - Modern Recruitment Platform',
  description: 'HireGenix is a modern recruitment platform that leverages artificial intelligence to help companies find the best talent.',
  keywords: 'recruitment, hiring, AI, talent acquisition, HireGenix',
  icons: {
    icon: '/Hiregenix-symbol.jpg',
    apple: '/Hiregenix-symbol.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
