import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/router'
import BurgerMenu from './BurgerMenu';
import BurgerMenuProfile from './BurgerMenuProfile';
import IncreaseBalance from './IncreaseBalance';
import LoginAccountMenu from './LoginAccountMenu';
import RegistrationMenu from './RegistrationMenu';
import RecoverPasswordMenu from './RecoverPasswordMenu';
import RecoverPasswordSecond from './RecoverPasswordSecond';


export const Header = () => {
 const [active, setActive] = useState(false);
 const [activeBalanceMenu, setActiveBalanceMenu] = useState(false)
const { pathname } = useRouter();
const [LoginMenu, showLoginMenu] = useState(false);
const [RegMenu, showRegMenu] = useState(false);
const [recoverPassMenu, showRecoverPassMenu] = useState(false);
const [MenuSecond, showMenuSecond] = useState(false);

const onClickPlus = () => {
      document.querySelector("body").classList.add("overflow-hidden");
      setActiveBalanceMenu(true);
    };
      
    const onClickLogin = () => {
       document.querySelector("body").classList.add("overflow-hidden");
      showLoginMenu(true);
      showRegMenu(false);
    }

    const onShowRegMenu = () => {
      document.querySelector("body").classList.add("overflow-hidden");
      showRegMenu(true)
      showLoginMenu(false)
    }
    const onCloseRegMenu = () => {
      document.querySelector("body").classList.remove("overflow-hidden");
      showRegMenu(false);
    };

    const onCloseRegMenuToLogin = () => {
      showRegMenu(false);
      showLoginMenu(true);
      showRecoverPassMenu(false)
    };

    const onShowRegPassMenu = () => {
      document.querySelector("body").classList.add("overflow-hidden");
      showRecoverPassMenu(true)
      showRegMenu(false);
      showLoginMenu(false);
    }
    const onCloseRegPassMenu = () => {
      document.querySelector("body").classList.remove("overflow-hidden");
      showRecoverPassMenu(false);
    };

    const onShowRegMenuSecond = () => {
      showMenuSecond(true);
       showRecoverPassMenu(false);
       showRegMenu(false);
       showLoginMenu(false);
    };


    const onCloseRegMenuSecond = () => {
      document.querySelector("body").classList.remove("overflow-hidden");
      showMenuSecond(false);
    };

  return (
    <div className="bg-white flex mb-[135px]">
      {activeBalanceMenu && (
        <IncreaseBalance setActiveBalanceMenu={setActiveBalanceMenu} />
      )}
      {LoginMenu && (
        <LoginAccountMenu
          onShowRegPassMenu={onShowRegPassMenu}
          showLoginMenu={showLoginMenu}
          LoginMenu={LoginMenu}
          onClickLogin={onClickLogin}
          onShowRegMenu={onShowRegMenu}
        />
      )}
      {RegMenu && (
        <RegistrationMenu
          onShowRegPassMenu={onShowRegPassMenu}
          onCloseRegMenuToLogin={onCloseRegMenuToLogin}
          showLoginMenu={showLoginMenu}
          onCloseRegMenu={onCloseRegMenu}
        />
      )}
      {recoverPassMenu && (
        <RecoverPasswordMenu
          onCloseRegPassMenu={onCloseRegPassMenu}
          onCloseRegMenuToLogin={onCloseRegMenuToLogin}
          onShowRegMenuSecond={onShowRegMenuSecond}
        />
      )}

      {MenuSecond && (
        <RecoverPasswordSecond
          onCloseRegMenuSecond={onCloseRegMenuSecond}
          onShowRegMenuSecond={onShowRegMenuSecond}
          onCloseRegMenuToLogin={onCloseRegMenuToLogin}
        />
      )}

      <nav className="fixed px-4 py-[36px] flex justify-evenly items-center bg-white space-x-20 w-[100%] font-nunito z-40">
        <div className="flex justify-between relative ">
          <Link
            className="text-3xl font-bold leading-none mr-0 lg:mr-20"
            href="/"
          >
            <Image
              src={"/Logo.svg"}
              width={150}
              height={150}
              alt={"logo"}
            ></Image>
          </Link>
          <ul className="hidden transform lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 ">
            <li>
              <Link
                className={`${
                  pathname === "/services"
                    ? "text-custom-orange after:border-b-4 after:rounded-t-2xl after:absolute after:bottom-[-10px] after:block after:w-[60px]  after:border-custom-orange"
                    : ""
                } hover:text-custom-orange text-custom-black text-[16px] font-[600] xl:text-[18px]`}
                href="/services"
              >
                Услуги
              </Link>
            </li>

            <li>
              <Link
                className={`hover:text-custom-orange text-custom-black text-[16px] font-[600] xl:text-[18px]`}
                href="#"
              >
                Отзывы
              </Link>
            </li>
            <li>
              <Link
                className={`hover:text-custom-orange text-custom-black text-[16px] font-[600] xl:text-[18px]`}
                href="#"
              >
                Как это работает
              </Link>
            </li>
            <li>
              <Link
                className={`hover:text-custom-orange text-custom-black text-[16px] font-[600] xl:text-[18px]`}
                href="#"
              >
                Преимущества
              </Link>
            </li>
            <li>
              <Link
                className={`hover:text-custom-orange text-custom-black text-[16px] font-[600] xl:text-[18px]`}
                href="#"
              >
                Частые вопросы
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`${
            pathname === "/profile" ||
            pathname === "/profile/deposits" ||
            pathname === "/profile/editPassword"
              ? "space-x-5 2xl:space-x-10"
              : "space-x-4"
          } flex items-center`}
        >
          {pathname !== "/profile" &&
            pathname !== "/profile/deposits" &&
            pathname !== "/profile/editPassword" && (
              <Link
                onClick={() => onClickLogin()}
                className="hidden lg:inline-block py-[13px] px-[20px] border-custom-orange border text-custom-orange rounded-2xl transition duration-200"
                href="#"
              >
                Войти
              </Link>
            )}

          <Link
            className="lg:inline-block py-[8px] px-[15px] bg-custom-orange xl:py-[13px] xl:px-[20px] text-[#fff]  rounded-2xl transition duration-200"
            href="/profile/makingorder"
          >
            Быстрый заказ
          </Link>

          {(pathname === "/profile/editPassword" ||
            pathname === "/profile/deposits") && (
            <div className="space-x-4 hidden lg:flex">
              <div className="flex items-center space-x-2">
                <Image
                  src={"/Profile/Balance.svg"}
                  width={30}
                  height={30}
                  alt={"Balance"}
                ></Image>
                <p className="font-bold whitespace-nowrap">{`1 653`}₽</p>
              </div>
              <div
                onClick={() => onClickPlus()}
                className="items-center flex justify-center bg-custom-orange bg-opacity-20 px-[8px] rounded-md cursor-pointer"
              >
                <Image
                  src={"/Profile/add.svg"}
                  width={15}
                  height={15}
                  alt={"plus"}
                ></Image>
              </div>
            </div>
          )}

          {/* ССЫЛКА В ЗАЛОГИНЕННЫЙ ПРОФИЛЬ */}
          <Link className="hidden lg:block" href="/profile">
            <Image
              src={"/Profile/Profile.svg"}
              width={30}
              height={30}
              alt={"profile"}
            ></Image>
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
        {pathname === "/profile" ||
        pathname === "/profile/deposits" ||
        pathname === "/profile/editPassword" ? (
          <BurgerMenuProfile setActive={setActive} />
        ) : (
          <BurgerMenu setActive={setActive} />
        )}
      </div>
    </div>
  );
}
