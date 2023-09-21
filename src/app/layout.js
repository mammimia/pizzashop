import Nav from './components/Nav';
import './globals.css';

import { Bangers, Quicksand, Roboto_Condensed } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
});

const bangers = Bangers({
  subsets: ['latin'],
  variable: '--font-bangers',
  weight: ['400']
});

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  weight: ['300', '400', '700']
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${bangers.variable} ${roboto_condensed.variable} font-quicksand`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
