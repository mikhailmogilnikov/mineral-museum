import { Inter } from 'next/font/google';
import Footer from '../widgets/Footer.jsx';
import Header from '../widgets/Header.jsx';
import './globals.css';
import Providers from './providers.jsx';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'Музей Минералов МГРИ',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="ru">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="theme-color" content="black" />
      </head>
      <body
        className={`${inter.className} select-none text-black dark:text-white bg-white dark:bg-black`}
      >
        <Providers>
          <Header />
          <main className="min-h-[calc(100vh-4rem)] w-full flex flex-col">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
