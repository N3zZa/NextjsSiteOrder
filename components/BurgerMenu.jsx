import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const BurgerMenu = ({ setActive }) => {
  return (
    <div className="z-50">
      <nav className="z-20 fixed top-0 left-0 bottom-0 flex flex-col w-full h-full py-6 px-6 bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <Link className="mr-auto text-3xl font-bold leading-none" href="#">
            <Image
              src={"/Logo.svg"}
              width={150}
              height={20}
              alt={"logo"}
            ></Image>
          </Link>
          <button onClick={() => setActive(false)} className="navbar-close">
            <svg
              className="h-6 w-6 text-custom-orange cursor-pointer hover:text-gray-500"
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
          </button>
        </div>
        <div>
          <ul className={`font-unbounded`}>
            <li className="mb-1">
              <Link
                className={`block p-4 text-2xl font-bold hover:bg-blue-50 hover:text-custom-orange rounded`}
                href="/services"
              >
                Услуги
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className={`block p-4 text-2xl font-bold hover:bg-blue-50 hover:text-custom-orange rounded`}
                href="#"
              >
                Отзывы
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className={`block p-4 text-2xl font-bold hover:bg-blue-50 hover:text-custom-orange rounded`}
                href="#"
              >
                Как это работает
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className={`block p-4 text-2xl font-bold hover:bg-blue-50 hover:text-custom-orange rounded`}
                href="#"
              >
                Преимущества
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className={`block p-4 text-2xl font-bold hover:bg-blue-50 hover:text-custom-orange rounded`}
                href="#"
              >
                Частые вопросы
              </Link>
            </li>
          </ul>
        </div>
        <div className="my-auto lg:mx-auto lg:w-[50%]">
          <div className="pt-6">
            <Link
              className="block lg:mx-auto lg:w-[50%] px-4 py-[13px] mb-3 text-center leading-loose font-semibold text-[#fff] bg-custom-orange rounded-2xl"
              href="#"
            >
              Быстрый заказ
            </Link>
            <Link
              className="block lg:mx-auto lg:w-[50%] px-4 py-[13px] mb-2 leading-loose text-center border-custom-orange border text-custom-orange font-semibol rounded-2xl"
              href="#"
            >
              Войти
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <p>Нужна помощь?</p>
          <Link
            className="flex space-x-2 items-center px-[24px] py-[12px] border border-gray-300 rounded-2xl"
            href={"#"}
          >
            <Image src={"/Chat.svg"} width={25} height={25} alt={"chat"} />
            <p>Чат с поддержкой</p>
          </Link>
          <Link
            className="flex space-x-2 items-center px-[24px] py-[12px] border border-gray-300 rounded-2xl"
            href={"#"}
          >
            <Image src={"/E-mail.svg"} width={25} height={25} alt={"e-mail"} />
            <p>support@smmflow.net</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default BurgerMenu