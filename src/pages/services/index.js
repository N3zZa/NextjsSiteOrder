import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import ServicesMain from 'components/ServicesMain';
import React from "react";

const index = () => {
  return (
    <div>
      <Header />
      <div
        className={`font-nunito max-w-[1400px] mx-auto px-[24px]`}
      >
        <ServicesMain />
        <Footer />
      </div>
    </div>
  );
}
export default index