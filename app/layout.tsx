import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kids Story App',
  description: 'A fun place for kids to read and enjoy stories!'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 min-h-screen flex items-center justify-center`}>{children}</body>
    </html>
  );
}