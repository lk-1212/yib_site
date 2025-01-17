import type { Metadata } from 'next';
import './globals.css';
import HeaderNav from '@/components/header_nav';
import { Roboto, Lora, Lato } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400'],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'yearsinbetween',
  description:
    'For the thoughts, feelings, and experiences in the years in between',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/yib_icon.jpg" sizes="any" />
      <body
        className={`${roboto.className} ${lora.className} ${lato.className}`}
      >
        <HeaderNav />

        {children}
      </body>
    </html>
  );
}
