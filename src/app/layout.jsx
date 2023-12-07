import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers.jsx';
import Header from '../components/ui/header/Header.jsx';
import Footer from '../components/ui/footer/Footer.jsx';

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
