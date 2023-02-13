import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import React from 'react'
import OrderPaymentComp  from "components/OrderPaymentComp";
const orderPayment = () => {

  return (
    <div>
      <Header />
      <div className="max-w-[1400px] mx-auto mt-[150px] space-y-10 font-nunito">
        <h1 className="font-[600] text-[36px] font-unbounded lg:text-start text-center">
          Оплата заказа
        </h1>
        <OrderPaymentComp />
        <Footer />
      </div>
    </div>
  );
}

export default orderPayment