import React from "react";
import Link from "next/link";
import Image from "next/image";

const BurgerMenuProfile = ({ setActive }) => {
  return (
    <div className="font-nunito">
      <nav className="z-20 fixed top-0 left-0 bottom-0 flex flex-col w-full h-full py-6 px-6 bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <Link className="mr-auto text-3xl font-bold leading-none" href="#">
            <Image
              src={"/Logo.svg"}
              width={150}
              height={150}
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
        <div className="flex space-x-10 sm:flex-row flex-col">
          <div className="flex items-center space-x-3 p-[16px]">
            <Image
              src={"/Profile/Profile.svg"}
              width={30}
              height={30}
              alt={"profile"}
            ></Image>
            <p className="font-[600]">Ekarasev@gmail.com</p>
          </div>
          <div className="flex space-x-20 mx-auto md:mx-0 my-10 sm:justify-start justify-between">
            <div className="flex items-center space-x-5">
              <Image
                src={"/Profile/Balance.svg"}
                width={30}
                height={30}
                alt={"Balance"}
              ></Image>
              <p className="font-[600]">{`119 653`}₽</p>
            </div>
            <div className="items-center flex justify-center bg-custom-orange bg-opacity-20 px-[8px] rounded-md cursor-pointer">
              <Image
                src={"/Profile/add.svg"}
                width={15}
                height={15}
                alt={"plus"}
              ></Image>
            </div>
          </div>
        </div>
        <div className="flex justify-between space-y-5 p-[3px] rounded-2xl flex-col ">
          <Link href={"/profile"}>
            <div
              className={`p-3 bg-opacity-20 rounded-2xl flex items-center space-x-3`}
            >
              <Image
                src={"/Profile/Orders.svg"}
                width={30}
                height={30}
                alt={"profile"}
              ></Image>
              <p>Заказы</p>
            </div>
          </Link>
          <Link href={"/profile/deposits"}>
            <div
              className={`p-3 bg-opacity-20 rounded-2xl flex items-center space-x-3`}
            >
              <Image
                src={"/Profile/Money.svg"}
                width={30}
                height={30}
                alt={"profile"}
              ></Image>
              <p>История пополнений</p>
            </div>
          </Link>
          <Link href={"/profile/editPassword"}>
            <div
              className={`bg-custom-orange: p-3 bg-opacity-20 rounded-2xl flex items-center space-x-3`}
            >
              <Image
                src={"/Profile/Edit.svg"}
                width={30}
                height={30}
                alt={"profile"}
              ></Image>
              <p>Сменить пароль</p>
            </div>
          </Link>
        </div>
        <div className="mt-auto lg:mx-auto lg:w-[50%]">
          <Link
            className="block lg:mx-auto lg:w-[50%] px-4 py-[13px] mb-3 text-center leading-loose font-semibold text-[#fff] bg-custom-orange rounded-2xl"
            href="#"
          >
            Сделать заказ
          </Link>
        </div>
        <Link
          className="flex space-x-2 items-center px-[24px] py-[12px] border border-gray-300 rounded-2xl justify-center lg:mx-auto lg:w-[25%]"
          href={"/"}
        >
          <Image
            src={"/Profile/LogOut.svg"}
            width={25}
            height={25}
            alt={"e-mail"}
          />
          <p>Выйти из аккаунта</p>
        </Link>
      </nav>
    </div>
  );
};

export default BurgerMenuProfile;
