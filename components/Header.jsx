import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { Unbounded } from "@next/font/google";

const unboundedFont = Unbounded({
  weight: ["400", "600", "800", "700", "900"],
  subsets: ["latin"],
  variable: "--font-unbounded",
});

export const Header = () => {
 const [active, setActive] = useState(false);

  return (
    <>
      <nav className="relative px-4 py-[36px] flex justify-between items-center bg-white">
        <div className="flex justify-between">
          <Link className="text-3xl font-bold leading-none mr-20" href="#">
            <Image
              src={"/logo.svg"}
              width={200}
              height={20}
              alt={"logo"}
            ></Image>
          </Link>
          <ul className="hidden transform lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <Link
                class="hover:text-custom-orange text-custom-black text-[18px] font-[600]"
                href="#"
              >
                Услуги
              </Link>
            </li>

            <li>
              <Link
                className="text-custom-black hover:text-custom-orange text-[18px] font-[600]"
                href="#"
              >
                Отзывы
              </Link>
            </li>
            <li>
              <Link
                className="text-custom-black hover:text-custom-orange text-[18px] font-[600]"
                href="#"
              >
                Как это работает
              </Link>
            </li>
            <li>
              <Link
                className="text-custom-black hover:text-custom-orange text-[18px] font-[600]"
                href="#"
              >
                Преимущества
              </Link>
            </li>
            <li>
              <Link
                className="text-custom-black hover:text-custom-orange text-[18px] font-[600]"
                href="#"
              >
                Частые вопросы
              </Link>
            </li>
          </ul>
        </div>

        <Link
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-[13px] px-[20px] border-custom-orange border text-custom-orange rounded-2xl transition duration-200"
          href="#"
        >
          Войти
        </Link>

        <div className="flex">
          <Link
            className="lg:inline-block py-[13px] px-[20px] bg-custom-orange text-[#fff]  rounded-2xl transition duration-200"
            href="#"
          >
            Быстрый заказ
          </Link>
          <div className="lg:hidden">
            <button
              onClick={() => setActive(!active)}
              className="navbar-burger flex items-center text-custom-orange p-3"
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className={("navbar-menu relative z-50", active ? "" : "hidden")}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="z-20 fixed top-0 left-0 bottom-0 flex flex-col w-full h-full py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none" href="#">
              <Image
                src={"/logo.svg"}
                width={200}
                height={20}
                alt={"logo"}
              ></Image>
            </Link>
            <button onClick={() => setActive(false)} class="navbar-close">
              <svg
                className="h-6 w-6 text-custom-orange cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className={`${unboundedFont.variable} font-unbounded`}>
              <li className="mb-1">
                <Link
                  class="block p-4 text-2xl font-bold hover:bg-blue-50 hover:text-custom-orange rounded"
                  href="#"
                >
                  Услуги
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-2xl font-bold hover:bg-blue-50 hover:text-custom-orange rounded"
                  href="#"
                >
                  Отзывы
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-2xl font-bold hover:bg-blue-50 hover:text-custom-orange rounded"
                  href="#"
                >
                  Как это работает
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  class="block p-4 text-2xl font-bold hover:bg-blue-50 hover:text-custom-orange rounded"
                  href="#"
                >
                  Преимущества
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  class="block p-4 text-2xl font-bold hover:bg-blue-50 hover:text-custom-orange rounded"
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
                className="block px-4 py-[13px] mb-3 text-center leading-loose font-semibold text-[#fff] bg-custom-orange rounded-2xl"
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
        </nav>
      </div>
    </>
  );
}
