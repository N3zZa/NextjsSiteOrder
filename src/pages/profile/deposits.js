import DepositsOrder from 'components/DepositsOrder';
import DepositsOrderMobile from 'components/DepositsOrderMobile';
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import NoOrders from 'components/NoOrders';
import ProfileMenu from 'components/ProfileMenu';
import React from 'react'

const deposits = () => {
  return (
    <div className="font-nunito px-5">
      <Header />
      <div className="max-w-[1400px] mx-auto mt-[150px]">
        <ProfileMenu />
        <div className="space-y-10 mt-[50px] mb-[150px]">
          <h1 className="font-[600] text-[24px] md:text-[36px] text-center sm:text-start leading-[54px] font-unbounded lg:ml-0">
            История пополнений
          </h1>
          <div className="space-y-10 hidden lg:block">
            <div className="text-custom-gray flex w-[60%] justify-between">
              <p>Дата</p>
              <p>Сумма</p>
              <p>Статус</p>
            </div>
          </div>
          <div className="hidden lg:block space-y-10">
            <DepositsOrder />
            <DepositsOrder />
            <DepositsOrder />
          </div>
          <div className="block lg:hidden space-y-10">
            <DepositsOrderMobile />
            <DepositsOrderMobile />
            <DepositsOrderMobile />
          </div>
        </div>
        {/* <NoOrders /> */}
        <Footer />
      </div>
    </div>
  );
}

export default deposits