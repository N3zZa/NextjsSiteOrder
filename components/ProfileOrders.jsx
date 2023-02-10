import React from 'react'
import { useRouter } from 'next/router';

import Order from './Order';
import OrderMobile from './OrderMobile';
import ProfileMenu from './ProfileMenu';

const ProfileOrders = () => {
    const {pathname} = useRouter();

  return (
    <div className="font-nunito space-y-10 mb-[200px] px-5">
      <ProfileMenu pathname={pathname}/>
      <div className="space-y-10">
        <h1 className="font-[600] text-[36px] leading-[54px] font-unbounded ml-[22%] lg:ml-0">
          Заказы
        </h1>
        <div className="space-y-10 hidden lg:block">
          <div className="text-custom-gray flex justify-between">
            <p className="w-[10%]">Дата</p>
            <p className="w-[30%]">Услуга</p>
            <p className="w-[20%]">Кол-во</p>
            <p className="w-[20%]">Цена</p>
            <p className="w-[14%]">Статус</p>
          </div>
          <Order />
          <Order />
          <Order />
        </div>
        <div className="space-y-10 block lg:hidden">
          <OrderMobile />
          <OrderMobile />
          <OrderMobile />
        </div>
      </div>
    </div>
  );
}

export default ProfileOrders