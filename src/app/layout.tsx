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
  metadataBase: new URL('https://www.myhiregenix.com'),
  title: 'HireGenix - Modern Recruitment Platform',
  description: 'HireGenix is a modern recruitment platform that leverages artificial intelligence to help companies find the best talent.',
  keywords: 'recruitment, hiring, AI, talent acquisition, HireGenix, recruitment software, candidate matching, video interviews',
  icons: {
    icon: '/HireGenix-Symbol.jpg',
    apple: '/HireGenix-Symbol.jpg',
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code when available
  },
  authors: [
    { name: 'HireGenix Team' }
  ],
  publisher: 'HireGenix',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
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
