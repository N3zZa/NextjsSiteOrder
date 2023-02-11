import Image from 'next/image';
import React, { useState } from 'react'

const IncreaseBalance = ({ setActiveBalanceMenu }) => {
    const [activePaymentRu, setActivePaymentRu] = useState(false);
    const [activePaymentCard, setActivePaymentCard] = useState(false);
    const [activePaymentQiwi, setActivePaymentQiwi] = useState(false);

   const onSelectPaymentRu = () => {
     setActivePaymentRu(!activePaymentRu);
     setActivePaymentCard(false)
     setActivePaymentQiwi(false)
   }
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
    <>
      <div className="fixed right-0 top-0 left-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20 z-50"></div>
      <div className="absolute m-0 w-[100%] left-0 bottom-0 h-[100%] items-center z-50 flex justify-center md:m-auto">
        <div className="bg-white p-[25px] font-[600] rounded-t-2xl md:rounded-2xl md:w-[50%] xl:w-[30%] w-[100%] space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="font-unbounded text-[20px] md:text-[24px]">Пополнение баланса</h1>

            <svg
              onClick={() => setActiveBalanceMenu(false)}
              className="h-6 w-6 cursor-pointer text-gray-400"
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
          </div>
          <div className="space-y-5 space-x-3">
            <div className="flex justify-between">
              <p className="font-bold md:text-[18px]">Сумма пополнения</p>
              <p className="text-custom-gray">Минимум 15 ₽</p>
            </div>
            <input
              type="text"
              placeholder="Введите или выберите сумму пополнения"
              className="border border-gray p-[14px] rounded-2xl w-[100%] outline-custom-orange placeholder:font-[400]"
            />
            <div className="flex justify-between">
              <p>{"250"}₽</p>
              <p>{"500"}₽</p>
              <p>{"1 000"}₽</p>
              <p>{"2 500"}₽</p>
              <p>{"5 000"}₽</p>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-gray-300 leading-3">Дополнить до</p>
            <div className="px-2 space-y-5">
              <div className="flex space-x-7">
                <p>
                  1 000 ₽ <span className="text-[#27AE60]">+ 50 ₽</span>
                </p>
                <p>
                  2 500 ₽ <span className="text-[#27AE60]">+ 500 ₽</span>
                </p>
              </div>
              <p>
                5 000 ₽ <span className="text-[#27AE60]">+ 1 000 ₽</span>
              </p>
            </div>
          </div>
          <div className="md:space-y-5">
            <p className="font-bold md:text-[18px]">Способ оплаты</p>
            <div className="md:space-y-5">
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
            </div>
          </div>
          <button
            className={`${
              activePaymentRu || activePaymentCard || activePaymentQiwi
                ? "bg-custom-orange cursor-pointer"
                : "bg-[#E0E0E0] cursor-no-drop"
            }  p-[14px] text-white rounded-2xl w-full `}
          >
            Оплатить
          </button>

          {/* Error */}
          {/* <div className='flex space-x-3 bg-red-200 rounded-2xl py-[8px] px-[20px]'>
            <Image
              src={"/Profile/Error.svg"}
              width={30}
              height={30}
              alt={"Qiwi"}
            ></Image>
            <p className='text-red-400'>
              Ошибка при оплате, попробуйте позже или обратитесь <a href="" className='text-blue-400 underline'>в поддержку</a>
            </p>
          </div> */}
          {/* Error */}
        </div>
      </div>
    </>
  );
};

export default IncreaseBalance