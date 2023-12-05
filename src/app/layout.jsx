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
      <body
        className={`${inter.className} antialiased text-black dark:text-white bg-white dark:bg-black`}
      >
        <Providers>
          <Header />
          <main className="min-h-[calc(100dvh-4rem)] flex flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
