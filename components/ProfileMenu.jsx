import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const ProfileMenu = () => {

   const { pathname } = useRouter();

  return (
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
              src={`/Profile/${
                pathname === "/profile" ? "OrdersSelected.svg" : "Orders.svg"
              }`}
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
              pathname === "/profile/deposits" ? "bg-custom-orange" : ""
            } p-3 bg-opacity-20 rounded-2xl flex items-center space-x-3`}
          >
            <Image
              src={`/Profile/${
                pathname === "/profile/deposits"
                  ? "MoneySelected.svg"
                  : "Money.svg"
              }`}
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
              src={`/Profile/${
                pathname === "/profile/editPassword"
                  ? "EditSelected.svg"
                  : "Edit.svg"
              }`}
              width={30}
              height={30}
              alt={"profile"}
            ></Image>
            <p>Сменить пароль</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProfileMenu