import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import ProfileMenu from 'components/ProfileMenu';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const editPassword = () => {
  return (
    <div className="font-nunito px-5">
      <Header />
      <div className="max-w-[1400px] mx-auto mt-[150px] space-y-10">
        <ProfileMenu />
        <div className="space-y-10 flex flex-col">
          <h1 className="font-[600] text-[36px] font-unbounded">
            Сменить пароль
          </h1>
          <div className="space-y-10">
            <div className="space-y-5 relative">
              <p className=" font-[700]">Текущий пароль</p>
              <input
                className="border border-gray p-[14px] rounded-2xl w-[100%] sm:w-[400px] outline-custom-orange"
                type="password"
                placeholder="Введите ваш пароль"
              />
              <span className="absolute top-10 sm:left-[370px] left-[93%]">
                <Image
                  src={"/Profile/EyeInput.svg"}
                  width={25}
                  height={25}
                  alt={"profile"}
                ></Image>
              </span>
            </div>
            <div className="space-y-5 relative">
              <p className=" font-[700]">Новый пароль</p>
              <input
                className="border border-gray p-[14px] rounded-2xl w-[100%] sm:w-[400px] outline-custom-orange"
                type="password"
                placeholder="Введите новый пароль"
              />
              <span className="absolute top-10 sm:left-[370px] left-[93%]">
                <Image
                  src={"/Profile/EyeInput.svg"}
                  width={25}
                  height={25}
                  alt={"profile"}
                ></Image>
              </span>
            </div>
            <span className="text-custom-gray">Минимум 8 символов</span>
          </div>
          <Link
            className="p-[15px] bg-custom-orange text-[#fff] rounded-2xl text-center w-[100%] sm:w-[400px]"
            href="#"
          >
            Быстрый заказ
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default editPassword