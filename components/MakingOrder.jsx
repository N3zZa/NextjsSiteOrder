import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import RateList from './lists/RateList';
import ServicesList from './lists/ServicesList';
import SocialsList from './lists/SocialsList';

const MakingOrder = ({ onMouseOver, onMouseOut }) => {
  const [completedOrder, showCompletedOrder] = useState(false);

const onClickOverflow = () => {
  document.querySelector("body").classList.remove("overflow-hidden");
};

const onClickCloseMenu = () => {
  onClickOverflow()
  showCompletedOrder(false)
} 


  return (
    <div className="space-y-10 flex flex-col mb-[100px] w-[60%]">
      {completedOrder && (
        <div className="font-nunito">
          <div className="fixed right-0 top-0 left-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20 z-50"></div>
          <div className="absolute m-0 w-[100%] left-0 bottom-0 h-[100%] items-end md:items-center z-50 flex justify-center md:m-auto">
            <div className="bg-white p-[29px] relative rounded-2xl md:h-auto md:w-auto h-[45%] w-[100%]">
              <svg
                onClick={() => onClickCloseMenu()}
                className="h-6 w-6 cursor-pointer text-gray-400 absolute right-4 top-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              <div className="flex flex-col items-center space-y-5">
                <Image
                  src={"/Profile/PasswordEdited.svg"}
                  width={50}
                  height={50}
                  alt={"profile"}
                ></Image>
                <h1 className="font-unbounded font-[600] text-[20px]">
                  Заказ успешно размещён
                </h1>
                <p className="text-[18px] text-custom-gray w-[80%] md:w-[60%] xl:w-[100%] text-center">
                  Ослеживайте его в профиле в разделе “Заказы”
                </p>
                <div className="flex space-x-5">
                  <Link href="/profile/makingorder">
                    <button
                      onClick={() => onClickCloseMenu()}
                      className="bg-custom-orange w-[100%] sm:w-auto rounded-2xl text-white py-[14px] px-[32px]"
                    >
                      Новый заказ
                    </button>
                  </Link>
                  <Link href="/profile">
                    <button
                      onClick={() => onClickCloseMenu()}
                      className="border border-custom-orange w-[100%] sm:w-auto rounded-2xl text-custom-orange py-[14px] px-[32px]"
                    >
                      Отслеживать
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="space-y-7">
        <div className="space-y-3 relative ">
          <p className=" font-[700]">Социальная сеть</p>

          <SocialsList />
        </div>
        <div className="space-y-3 relative">
          <p className=" font-[700]">Услуга</p>

          <ServicesList />
        </div>
        <div className="space-y-3 relative">
          <p className=" font-[700]">Тариф</p>

          <RateList onMouseOver={onMouseOver} onMouseOut={onMouseOut} />
        </div>
        <div className="space-y-3 relative w-[40%]">
          <p className=" font-[700]">Ссылка на профиль</p>
          <input
            className="border border-gray p-[14px] rounded-2xl w-[100%]  outline-custom-orange"
            type="text"
            placeholder="Вставьте ссылку"
          />
        </div>
        <span className="text-custom-gray">
          Профиль должен быть открытым для правильной
          <br /> работы наших услуг.
        </span>
        <div className="space-y-3 relative w-[40%]">
          <div className="flex justify-between w-full">
            <p className=" font-[700]">Промокод</p>
            <div className="flex space-x-2">
              <Image
                src={"/PromoCode.svg"}
                width={25}
                height={25}
                alt={"PromoCode"}
              ></Image>

              <p className="text-custom-orange">Получить промокод</p>
            </div>
          </div>
          <input
            className="border border-gray p-[14px] rounded-2xl w-[100%]  outline-custom-orange"
            type="text"
            placeholder="Введите промокод"
          />
          <Link href="/profile/orderPayment">
            <button
              onClick={() => showCompletedOrder(true)}
              className={`bg-[#E0E0E0] cursor-no-drop
        p-[14px] text-white rounded-2xl w-[100%] mt-5`}
            >
              Оплатить
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MakingOrder