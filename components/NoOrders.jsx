import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NoOrders = () => {
  const { pathname } = useRouter();

  return (
    <div className="font-nunito space-y-10 mb-[200px] px-5">
      <div className="justify-between hidden lg:flex">
        <div className="flex space-x-10 border border-gray rounded-2xl p-3">
          <div className="flex items-center space-x-3">
            <Image
              src={"/Profile/Profile.svg"}
              width={30}
              height={30}
              alt={"profile"}
            ></Image>
            <p>Ekarasev@gmail.com</p>
          </div>

          {/*ВЫХОД ИЗ ПРОФИЛЯ */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <Image
              src={"/Profile/LogOut.svg"}
              width={30}
              height={30}
              alt={"profile"}
            ></Image>
            <p className="text-custom-gray">Выйти</p>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-7 border border-gray p-[3px] rounded-2xl">
          <Link href={"/profile"}>
            <div
              className={`${
                pathname === "/profile" ? "bg-custom-orange" : ""
              } p-3 bg-opacity-20 rounded-2xl flex items-center space-x-3`}
            >
              <Image
                src={"/Profile/OrdersSelected.svg"}
                width={30}
                height={30}
                alt={"profile"}
              ></Image>
              <p>Заказы</p>
            </div>
          </Link>
          <Link href={"/profile/deposits"}>
            <div
              className={`${
                pathname === "/profile/depositsStory" ? "bg-custom-orange" : ""
              } p-3 bg-opacity-20 rounded-2xl flex items-center space-x-3`}
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
              className={`${
                pathname === "/profile/editPassword" ? "bg-custom-orange" : ""
              } p-3 bg-opacity-20 rounded-2xl flex items-center space-x-3`}
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
      </div>
      <div className="space-y-10">
        <h1 className="font-[600] text-[36px] leading-[54px] font-unbounded ml-[22%] lg:ml-0">
          Заказы
        </h1>
        <div className="flex items-center justify-center flex-col text-center space-y-6">
          <Image
            src={"/Profile/NoOrders.svg"}
            width={350}
            height={350}
            alt={"profile"}
          ></Image>
          {pathname === "/profile" ? (
            <h1 className="font-[600] text-[24px] leading-[36px] font-unbounded">
              Заказов нет
            </h1>
          ) : (
            <h1 className="font-[600] text-[24px] leading-[36px] font-unbounded">
              Пополнений ещё не было
            </h1>
          )}

          {pathname === "/profile" ? (
            <p className="text-custom-gray text-[18px] leading-[26px]">
              Вы ещё ни разу ничего не заказывали.
              <br /> Пополните баланс и сделайте свой первый заказ!
            </p>
          ) : (
            <p className="text-custom-gray text-[18px] leading-[26px]">
              Вы ещё ни разу не пополняли баланс.<br /> Пополните баланс и сделайте
              свой первый заказ!
            </p>
          )}
          <button className="bg-custom-orange text-white px-[20px] py-[14px] rounded-2xl">
            Сделать заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoOrders;
