import { ReactNode } from 'react';

import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Neko Auth',
  description: 'Sample auth app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
