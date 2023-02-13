import { Footer } from "components/Footer";
import { Header } from "components/Header";
import MakingOrder from "components/MakingOrder";
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
        <div className="flex justify-between flex-col space-y-8">
          <h1 className="font-[600] text-[36px] font-unbounded">
            Оформление заказа
          </h1>
          <div className="hidden md:flex">
            <MakingOrder
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            {isHovering && (
              <div className="w-[40%] flex flex-col space-y-5">
                <p className="text-custom-orange">Ваш заказ</p>
                <div className="space-y-5">
                  <div className="flex items-center space-x-5">
                    <Image
                      src={"/Services/Instagram.svg"}
                      width={40}
                      height={40}
                      alt={"Instagram"}
                    ></Image>
                    <h1 className="font-[600] font-unbounded text-[24px]">
                      Подписчики Instagram
                    </h1>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 border border-gray-300 rounded-2xl font-bold">
                      <p>🌍 Со всего мира</p>
                    </div>
                    <div className="p-2 border border-gray-300 rounded-2xl font-bold">
                      <p>🚀 Скорость до 10К/день</p>
                    </div>
                    <div className="p-2 border border-gray-300 rounded-2xl font-bold">
                      <p>⚡ Быстрый старт</p>
                    </div>
                    <div className="p-2 border border-gray-300 rounded-2xl font-bold">
                      <p>⭐️ Гарантия 60 дней</p>
                    </div>
                  </div>
                  <div className="space-y-3 relative">
                    <div className="flex flex-col space-y-3">
                      <div className="flex justify-between">
                        <p className="text-custom-gray text-[18px]">Тариф: </p>
                        <p> Живые ❤️</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-custom-gray text-[18px]">
                          Количество:{" "}
                        </p>
                        <p>10 000</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-custom-gray text-[18px]">
                          Ссылка на профиль:{" "}
                        </p>
                        <p>https://instagram.com/durov</p>
                      </div>
                    </div>
                    <button className="border border-custom-orange text-custom-orange p-[14px] rounded-2xl flex space-x-3 items-center">
                      <Image
                        src={"/Profile/EditSelected.svg"}
                        width={20}
                        height={20}
                        alt={"Instagram"}
                      ></Image>
                      <p>Изменить заказ</p>
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* {isHovering && (
              <div className="w-[40%] flex flex-col space-y-5">
                <div className="flex justify-between items-center">
                  <p className="text-custom-orange">Тариф</p>
                  <p className="uppercase bg-custom-orange bg-opacity-20 text-custom-orange p-1 rounded-md">
                    хит
                  </p>
                </div>
                <div className="space-y-5">
                  <h1 className="font-[600] font-unbounded text-[24px]">
                    Русские 🔥
                  </h1>
                  <p className="text-custom-gray leading-[29px] text-[18px]">
                    Подписываются живые люди со всего мира. Все отписки и
                    списания мы будем восстанавливать автоматически в течение 60
                    дней после заказа.
                  </p>
                  <div className="grid grid-cols-2">
                    <div className="p-2 border border-gray-300 rounded-2xl font-bold">
                      <p>🌍 Со всего мира</p>
                    </div>
                    <div className="p-2 border border-gray-300 rounded-2xl font-bold">
                      <p>🚀 Скорость до 10К/день</p>
                    </div>
                    <div className="p-2 border border-gray-300 rounded-2xl font-bold">
                      <p>⚡ Быстрый старт</p>
                    </div>
                    <div className="p-2 border border-gray-300 rounded-2xl font-bold">
                      <p>⭐️ Гарантия 60 дней</p>
                    </div>
                  </div>
                  <div className="space-y-3 relative">
                    <h1 className="font-unbounded font-[600] text-[20px]">
                      Скидки <span className="text-custom-orange">до 50%</span>{" "}
                      в нашем телеграм-канале
                    </h1>
                    <p className="text-custom-gray">
                      Раздаем промокоды в Telegram каждую неделю
                    </p>
                    <button className="bg-custom-orange text-white p-[14px] rounded-2xl">
                      Получить промокод
                    </button>
                    <Image
                      className="absolute right-0 bottom-0"
                      src={"/TelegramWheelOrder.svg"}
                      width={80}
                      height={80}
                      alt={"PromoCode"}
                    ></Image>
                  </div>
                </div>
              </div>
            )} */}
            
          </div>
          <div className="block md:hidden">
            <MakingOrderMobile />
          </div>
        </div>
        <div className="hidden md:block">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default makingorder;
