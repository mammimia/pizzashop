import CartDesktop from './components/cart/CartDesktop';
import CartMobile from './components/cart/CartMobile';
import CartMobileIcon from './components/cart/CartMobileIcon';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import CartProvider from './context/CartContext';
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
    <CartProvider>
      <html lang="en">
        <body
          className={`${quicksand.variable} ${bangers.variable} ${roboto_condensed.variable} font-quicksand`}
        >
          <Nav />
          <CartMobileIcon />
          <CartMobile />
          <CartDesktop />
          {children}
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
