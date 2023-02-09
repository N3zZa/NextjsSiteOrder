import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import Head from 'next/head'
import { Main } from 'components/Main';

import { Nunito_Sans } from "@next/font/google";

const nunito = Nunito_Sans({
  weight: ["400", "600", "800", "700", "900"],
  subsets: ["latin"],
  variable: "--font-nunito",
});


export default function Home() {

  return (
    <div
      className={`${nunito.variable} font-nunito max-w-[1400px] mx-auto px-[24px]`}
    >
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoimg.svg" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
