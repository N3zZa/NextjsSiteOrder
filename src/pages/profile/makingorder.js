import { Footer } from "components/Footer";
import { Header } from "components/Header";
import MakingOrder from "components/MakingOrder";
import MakingOrderFull from "components/MakingOrderFull";
import MakingOrderMobile from "components/MakingOrderMobile";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

const makingorder = () => {
const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
  setIsHovering(false);
  };

  return (
    <div>
      <Head>
        <title>Оформление заказа</title>
        <meta name="description" content="Making order" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoimg.svg" />
      </Head>

      <Header />
      <div className={`font-nunito max-w-[1400px] mx-auto px-[24px]`}>
      <MakingOrderFull />
        <div className="hidden md:block">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default makingorder;
