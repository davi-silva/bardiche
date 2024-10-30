import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { NavigationBar } from '@/components';

import './globals.css';
import styles from './layout.module.scss';

const cinzelBlack = localFont({
  src: './fonts/Cinzel-Black.ttf',
  variable: '--font-cinzel-black',
  weight: '100 900',
});
const cinzelBold = localFont({
  src: './fonts/Cinzel-Bold.ttf',
  variable: '--font-cinzel-bold',
  weight: '100 900',
});
const cinzelRegular = localFont({
  src: './fonts/Cinzel-Regular.ttf',
  variable: '--font-cinzel-regular',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Bardiche',
  description: 'Bardiche site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzelBlack.variable} ${cinzelBold.variable} ${cinzelRegular.variable}`}
      >
        <NavigationBar />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
