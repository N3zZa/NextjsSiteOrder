import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export const Footer = () => {
  return (
    <div className="relative mt-auto bottom-0 text-custom-gray pb-10 font-nunito">
      <div className="flex flex-col w-full space-y-5 pr-10 px-5">
        <Image
          className="my-7"
          src={"/Logo.svg"}
          width={140}
          height={20}
          alt={"logo"}
        />
        <div className="flex flex-col justify-between md:flex-row items-center md:items-start px-2">
          <div>
            <p>
              SMMSMM - сервис, где вы сможете приобрести качественное
              <br /> продвижение в социальных сетях по выгодным ценам.
            </p>
            <div className="flex flex-col my-10 md:space-y-3 order-4">
              <ul className="flex flex-col lg:items-center lg:w-auto lg:space-x-6  md:flex-row">
                <Link href={"/services"}>
                  <li className="hover:text-custom-orange cursor-pointer">
                    Услуги
                  </li>
                </Link>
                <li className="hover:text-custom-orange cursor-pointer">
                  Как это работает
                </li>
                <li className="hover:text-custom-orange cursor-pointer">
                  SMMFlow vs Другие сайты
                </li>
                <li className="hover:text-custom-orange cursor-pointer">
                  Правила сервиса
                </li>
              </ul>
              <ul className="flex flex-col lg:items-center lg:w-auto lg:space-x-6 md:flex-row">
                <li className="hover:text-custom-orange cursor-pointer">
                  Отзывы
                </li>
                <li className="hover:text-custom-orange cursor-pointer">
                  Преимущества
                </li>
                <li className="hover:text-custom-orange cursor-pointer">
                  Частые вопросы
                </li>
                <li className="hover:text-custom-orange cursor-pointer">
                  Контакты
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <p>Нужна помощь?</p>
            <Link
              className="flex space-x-2 items-center px-[24px] py-[12px] border border-gray-300 hover:border-custom-orange rounded-2xl"
              href={"#"}
            >
              <Image src={"/Chat.svg"} width={25} height={25} alt={"chat"} />
              <p>Чат с поддержкой</p>
            </Link>
            <Link
              className="flex space-x-2 items-center px-[24px] py-[12px] border border-gray-300 hover:border-custom-orange rounded-2xl"
              href={"#"}
            >
              <Image
                src={"/E-mail.svg"}
                width={25}
                height={25}
                alt={"e-mail"}
              />
              <p>support@smmflow.net</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-center order-2 items-center md:justify-between">
          <div className="hidden space-x-10 text-gray-400 md:flex">
            <a
              href={"https://flexsmm.com/privacy"}
              target="_blank"
              rel="noreferrer"
              className="hover:text-custom-orange"
            >
              Политика конфиденциальности
            </a>
            <a
              href={"#"}
              target="_blank"
              rel="noreferrer"
              className="hover:text-custom-orange"
            >
              Публичная оферта
            </a>
            <a
              href={"#"}
              target="_blank"
              rel="noreferrer"
              className="hover:text-custom-orange"
            >
              Пользовательское соглашение
            </a>
          </div>
          <div className="flex space-x-6 items-center">
            <Link href={"#"}>
              <Image src={"/mir-logo.svg"} width={40} height={40} alt={"mir"} />
            </Link>
            <Link href={"#"}>
              <Image src={"/Visa.svg"} width={40} height={40} alt={"Visa"} />
            </Link>
            <Link href={"#"}>
              <Image
                src={"/mastercard.svg"}
                width={40}
                height={40}
                alt={"mastercard"}
              />
            </Link>
            <Link href={"#"}>
              <Image src={"/qiwi.svg"} width={40} height={40} alt={"qiwi"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
