import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic.js';
import Footer from '../widgets/Footer.jsx';
import Providers from './providers.jsx';
import './global.css';
import Head from './head.jsx';
import HeaderPreloader from '@/features/preloaders/HeaderPreloader.jsx';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'Музей Минералов МГРИ',
  description:
    'Интерактивная выставка геологических экспонатов МГРИ с трёхмерной визуализацией',
};

export default function RootLayout({ children }) {
  const DynamicHeader = dynamic(() => import('../widgets/Header.jsx'), {
    ssr: false,
    loading: () => <HeaderPreloader />,
  });

  return (
    <html suppressHydrationWarning lang="ru">
      <head>
        <Head />
      </head>
      <body className={`${inter.className} select-none overflow-x-hidden`}>
        <Providers>
          <DynamicHeader />
          <main className="min-h-[calc(100vh-4rem)] w-full flex flex-col">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
