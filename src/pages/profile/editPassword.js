import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import ProfileMenu from 'components/ProfileMenu';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const editPassword = () => {
  const [completedPasswordMenu, showCompletedPasswordMenu] = useState(false);

  const onClickEditPassword = () => {
    document.querySelector("body").classList.add("overflow-hidden");
    showCompletedPasswordMenu(true);
  }
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
              <span className="absolute top-10 sm:left-[365px] left-[93%]">
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
              <span className="absolute top-10 sm:left-[365px] left-[93%]">
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
            onClick={() => onClickEditPassword()}
            className="p-[15px] bg-custom-orange text-[#fff] rounded-2xl text-center w-[100%] sm:w-[400px]"
            href="#"
          >
            Сменить пароль
          </Link>
          {completedPasswordMenu && (
            <div className='font-nunito'>
              <div className="fixed right-0 top-0 left-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20 z-50"></div>
              <div className="absolute m-0 w-[100%] left-0 bottom-0 h-[100%] items-end md:items-center z-50 flex justify-center md:m-auto">
                <div className="bg-white p-[29px] relative rounded-2xl md:h-auto md:w-auto h-[45%] w-[100%]">
                  <svg
                    onClick={() => showCompletedPasswordMenu(false)}
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
                    <h1 className='font-unbounded font-[600] text-[20px]'>Пароль изменён</h1>
                    <p className='text-[18px] text-custom-gray w-[80%] md:w-[60%] xl:w-[100%] text-center'>Используйте новый пароль для входа в аккаунт</p>
                    <button className="bg-custom-orange w-[100%] sm:w-auto rounded-2xl text-white py-[14px] px-[32px]">
                      Понятно
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default editPassword