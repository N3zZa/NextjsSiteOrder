import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import Head from 'next/head'
import { Main } from 'components/Main';


export default function Home() {

  return (
    <div>
      <Header />
      <div
        className={`font-nunito max-w-[1400px] mx-auto px-[24px]`}
      >
        <Head>
          <title></title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logoimg.svg" />
        </Head>
        <Main />
        <Footer />
      </div>
    </div>
  );
}
