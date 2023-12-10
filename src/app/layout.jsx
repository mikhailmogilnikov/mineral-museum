import { Inter } from 'next/font/google';
import Footer from '../widgets/Footer.jsx';
import Header from '../widgets/Header.jsx';
import Providers from './providers.jsx';
import './global.css';
import Head from './head.jsx';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'Музей Минералов МГРИ',
  description:
    'Интерактивная выставка геологических экспонатов МГРИ с трёхмерной визуализацией',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="ru">
      <head>
        <Head />
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
