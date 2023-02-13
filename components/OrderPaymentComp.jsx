import Image from "next/image";
import React, { useState } from "react";

const OrderPaymentComp = () => {
  const [activePaymentRu, setActivePaymentRu] = useState(false);
  const [activePaymentCard, setActivePaymentCard] = useState(false);
  const [activePaymentQiwi, setActivePaymentQiwi] = useState(false);

  const onSelectPaymentRu = () => {
    setActivePaymentRu(!activePaymentRu);
    setActivePaymentCard(false);
    setActivePaymentQiwi(false);
  };
  const onSelectPaymentCard = () => {
    setActivePaymentCard(!activePaymentCard);
    setActivePaymentRu(false);
    setActivePaymentQiwi(false);
  };
  const onSelectPaymentQiwi = () => {
    setActivePaymentQiwi(!activePaymentQiwi);
    setActivePaymentRu(false);
    setActivePaymentCard(false);
  };

  return (
    <div className="flex flex-col justify-start lg:justify-between lg:flex-row items-center lg:items-start space-y-5">
      <div className="space-y-5  lg:w-auto w-full items-center flex flex-col">
        <div className="space-y-10 flex flex-col lg:w-auto w-full items-center lg:items-start">
          <div className="space-y-10 px-5 w-full flex flex-col items-center lg:block lg:items-start">
            <div className="relative flex flex-col space-y-3 md:w-auto w-full">
              <p className=" font-[700] mb-2">Ваш E-mail</p>
              <input
                className="border border-gray p-[14px] rounded-2xl w-[100%] md:w-[400px] outline-custom-orange"
                type="password"
                placeholder="Введите E-mail"
              />
              <span className="text-custom-gray">
                Отправим чек и данные для доступа к аккаунту
              </span>
            </div>
          </div>
        </div>
        <div
          className={`font-nunito mx-auto lg:mb-[150px] md:w-auto w-full px-5`}
        >
          <div className="flex flex-col space-y-5">
            <p className="font-bold md:text-[18px] ">Способ оплаты</p>
            <div className="md:space-y-5 w-full md:w-auto">
              <div
                onClick={() => onSelectPaymentRu()}
                className={`${
                  activePaymentRu ? "border border-custom-orange" : ""
                } flex space-x-7 px-[20px] py-[24px] cursor-pointer rounded-2xl`}
              >
                <Image
                  src={"/Profile/RU.svg"}
                  width={30}
                  height={30}
                  alt={"RU"}
                ></Image>
                <p>Карта РФ</p>
              </div>
              <div
                onClick={() => onSelectPaymentCard()}
                className={`${
                  activePaymentCard ? "border border-custom-orange" : ""
                } flex space-x-7 px-[20px] py-[24px] cursor-pointer rounded-2xl`}
              >
                <Image
                  src={"/Profile/BankCard.svg"}
                  width={30}
                  height={30}
                  alt={"BankCard"}
                ></Image>
                <p>Карта другой страны</p>
              </div>
              <div
                onClick={() => onSelectPaymentQiwi()}
                className={`${
                  activePaymentQiwi ? "border border-custom-orange" : ""
                } flex space-x-7 px-[20px] py-[24px] cursor-pointer rounded-2xl`}
              >
                <Image
                  src={"/Profile/Qiwi.svg"}
                  width={30}
                  height={30}
                  alt={"Qiwi"}
                ></Image>
                <p>Qiwi</p>
              </div>
              <button
                className={`bg-[#E0E0E0] cursor-no-drop p-[14px] text-white rounded-2xl w-[100%] md:w-[400px]`}
              >
                Оплатить
              </button>
            </div>
            {/* Error */}
            {/* <div className="flex space-x-3 bg-red-100 rounded-2xl py-[8px] px-[20px]">
                  <Image
                    src={"/Profile/Error.svg"}
                    width={30}
                    height={30}
                    alt={"Error"}
                  ></Image>
                  <p className="text-red-400">
                    Ошибка при оплате, попробуйте позже
                    <br /> или обратитесь{" "}
                    <a href="" className="text-blue-400 underline">
                      в поддержку
                    </a>
                  </p>
                </div> */}
            {/* Error */}
            {/* Completed */}
            {/* <div className="flex space-x-3 bg-green-100 rounded-2xl py-[8px] px-[20px]">
            <Image
              src={"/Profile/Loading.svg"}
              width={30}
              height={30}
              alt={"Loading"}
            ></Image>
            <p className="text-green-400">
              Переходим в платёжную систему
            </p>
          </div>{" "} */}
            {/*  Completed*/}
          </div>
        </div>
      </div>

      {/* <div className="w-[40%] flex flex-col space-y-5">
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
                Подписываются живые люди со всего мира. Все отписки и списания
                мы будем восстанавливать автоматически в течение 60 дней после
                заказа.
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
                  Скидки <span className="text-custom-orange">до 50%</span> в
                  нашем телеграм-канале
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
          </div> */}
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between">
          <p className="text-custom-orange">Ваш заказ</p>
          <button className="flex space-x-3 items-center text-custom-orange">
            <Image
              src={"/Profile/EditSelected.svg"}
              width={20}
              height={20}
              alt={"Instagram"}
            ></Image>
            <p>Изменить заказ</p>
          </button>
        </div>
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
                <p className="text-custom-gray text-[18px]">Количество: </p>
                <p>10 000</p>
              </div>
              <div className="flex justify-between">
                <p className="text-custom-gray text-[18px]">
                  Ссылка на профиль:{" "}
                </p>
                <p>https://instagram.com/durov</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPaymentComp;
