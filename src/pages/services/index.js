import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import ServicesMain from 'components/ServicesMain';
import React from 'react'


import { Nunito_Sans } from "@next/font/google";

const nunito = Nunito_Sans({
  weight: ["400", "600", "800", "700", "900"],
  subsets: ["latin"],
  variable: "--font-nunito",
});


const index = () => {
  return (
    <div
      className={`${nunito.variable} font-nunito max-w-[1400px] mx-auto px-[24px]`}
    >
      <Header />
      <ServicesMain />
      <Footer />
    </div>
  );
}
export default index