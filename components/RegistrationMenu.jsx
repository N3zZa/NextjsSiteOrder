import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const RegistrationMenu = ({
  onCloseRegMenu,
  onCloseRegMenuToLogin,
  onShowRegPassMenu,
}) => {
  const onClickOverflow = () => {
    document.querySelector("body").classList.remove("overflow-hidden");
  };

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="font-nunito">
      <div className="bg-black bg-opacity-20 absolute w-full h-full top-0 left-0 rounded-2xl z-50"></div>
      <div className="absolute w-[61%] h-[72%]">
        <div className="fixed md:absolute z-50 p-5 w-[95%] h-[60%] md:w-auto bg-white md:right-0 bottom-0 md:bottom-0 rounded-2xl">
          <div className="flex flex-col space-y-5 items-center md:items-start">
            <div className="flex justify-between items-center">
              <h1 className="font-[600] font-unbounded text-[24px]">
                Регистрация
              </h1>
              <svg
                onClick={() => onCloseRegMenu()}
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
            <div className="space-y-5">
              <div className="space-y-5 relative">
                <p className=" font-[700]">E-mail</p>
                <input
                  className="border border-gray p-[14px] rounded-2xl w-[100%] sm:w-[400px] outline-custom-orange"
                  type="e-mail"
                  placeholder="Введите E-mail"
                />
              </div>
              <div className="space-y-5 relative">
                <p className=" font-[700]">Пароль</p>
                <input
                  type={passwordType}
                  onChange={handlePasswordChange}
                  value={passwordInput}
                  className="border border-gray p-[14px] rounded-2xl w-[100%] sm:w-[400px] outline-custom-orange"
                  placeholder="Введите пароль"
                />
                <span
                  onClick={togglePassword}
                  className="absolute top-10 sm:left-[365px] left-[93%] cursor-pointer"
                >
                  <Image
                    src={"/Profile/EyeInput.svg"}
                    width={25}
                    height={25}
                    alt={"profile"}
                  ></Image>
                </span>
              </div>
              <p
                onClick={() => onShowRegPassMenu()}
                className="text-custom-orange cursor-pointer"
              >
                Забыли пароль?
              </p>
              <div className="space-y-5 flex flex-col">
                {/* Error */}
                {/* <div className="flex space-x-3 bg-red-100 rounded-2xl py-[8px] px-[20px] items-center">
                  <Image
                    src={"/Profile/Error.svg"}
                    width={30}
                    height={30}
                    alt={"Error"}
                  ></Image>
                  <p className="text-red-400">
                    Этот E-mail уже используется
                  </p>
                </div> */}
                {/* Error */}

                <Link onClick={() => onClickOverflow()} href="/profile">
                  <button className="p-[14px] text-white bg-custom-orange rounded-2xl w-full">
                    Зарегистрироваться
                  </button>
                </Link>
                <button
                  onClick={() => onCloseRegMenuToLogin()}
                  className="p-[14px] text-custom-orange bg-custom-orange bg-opacity-20 rounded-2xl w-full"
                >
                  Назад ко входу
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationMenu;
