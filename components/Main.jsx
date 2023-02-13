import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Unbounded } from "@next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import {Navigation } from 'swiper';

const unboundedFont = Unbounded({
  weight: ["400", "600", "800", "700", "900"],
  subsets: ["latin"],
  variable: "--font-unbounded",
});

export const Main = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);


  return (
    <div className="flex justify-center py-[150px] overflow-x-hidden flex-col">
      <div>
        <Image
          className="absolute top-[140px] xl:left-[57%] 2xl:rotate-0 left-[7%] rotate-[-20deg] z-[-5]"
          src={"/socialsBg/telegram.svg"}
          width={80}
          height={80}
          alt={"img"}
        ></Image>
        <Image
          className="absolute top-[350px]  xl:left-[22%] xl:w-[150px] w-[100px] md:left-[2%] left-[-40px] z-[-5]"
          src={"/socialsBg/inst.svg"}
          width={150}
          height={150}
          alt={"img"}
        ></Image>
        <Image
          className="absolute top-[190px] xl:left-[32%] right-[15%] xl:w-[100px] w-[80px] z-[-5]"
          src={"/socialsBg/youtube.svg"}
          width={100}
          height={100}
          alt={"img"}
        ></Image>
        <Image
          className="absolute top-[350px] xl:right-[25%]  xl:w-[150px] w-[100px] md:right-[5%] right-[-30px] z-[-5]"
          src={"/socialsBg/tiktok.svg"}
          width={150}
          height={150}
          alt={"img"}
        ></Image>
        <Image
          className="absolute top-[550px] xl:right-[38%] right-[20%] z-[-5]"
          src={"/socialsBg/facebook.svg"}
          width={80}
          height={80}
          alt={"img"}
        ></Image>
        <Image
          className="absolute top-[700px] lg:right-[30%] right-[10%] xl:w-[150px] w-[100px] z-[-5]"
          src={"/socialsBg/twitch.svg"}
          width={150}
          height={150}
          alt={"img"}
        ></Image>
        <Image
          className="absolute top-[750px] lg:left-[35%] left-[10%] xl:w-[150px] w-[100px] z-[-5]"
          src={"/socialsBg/vk.svg"}
          width={150}
          height={150}
          alt={"img"}
        ></Image>
        <div className="text-center z-10">
          <h1
            className={`font-unbounded ${unboundedFont.variable} text-[36px] font-[700] leading-[54px] relative`}
          >
            Продвижение во{" "}
            <span className="text-custom-orange">
              всех
              <br className="md:block hidden" /> соцсетях
            </span>{" "}
            <Image
              className="absolute xl:right-[25%] lg:right-[20%] right-[10%] top-[10px] hidden md:block"
              src={"/click.svg"}
              width={50}
              height={50}
              alt={"img"}
            ></Image>
            за пару кликов
          </h1>
          <p className="text-custom-gray font-nunito leading-[29px] mt-7">
            Получайте подписчиков, лайки, репосты, просмотры, прослушивания
            <br /> и любую другую активность на свои профили в социальных сетях
            <br /> по самым низким ценам на рынке и в самые быстрые сроки!
          </p>
          <button className="bg-custom-orange py-[18px] px-[32px] rounded-xl text-white my-10">
            Начать продвижение
          </button>
          <div className="flex justify-center items-center space-x-3 mb-3 text-custom-black">
            <Image
              className="m-0"
              src={"/stars.svg"}
              width={120}
              height={120}
              alt={"img"}
            ></Image>
            <p className="font-bold">4.4 / 5</p>
          </div>
          По данным 693 отзывов
        </div>
      </div>
      <div className="mt-[230px] flex flex-col">
        <div className="flex self-stretch lg:justify-around lg:flex-row flex-col justify-center lg:items-start items-center">
          <div className="lg:w-[50%]">
            <h1
              className={`mb-10 font-bold text-[36px] leading-[54px] font-unbounded`}
            >
              Быстрый заказ
            </h1>
            <p className="text-custom-gray mb-5">
              Сначала выберите социальную сеть
            </p>
            <div className="grid grid-cols-2 gap-[24px]">
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:text-custom-orange hover:border-custom-orange"
              >
                <button className="flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/inst.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">Instagram</p>
                </button>
              </Link>
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:border-custom-orange  hover:text-custom-orange"
              >
                <button className="self-stretch  flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/twitter.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">Twitter</p>
                </button>
              </Link>
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:border-custom-orange  hover:text-custom-orange"
              >
                <button className="flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/Vk.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">VK</p>
                </button>
              </Link>
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:border-custom-orange  hover:text-custom-orange"
              >
                <button className="flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/youtube.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">YouTube</p>
                </button>
              </Link>
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:border-custom-orange  hover:text-custom-orange"
              >
                <button className="flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/telegram.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">Telegram</p>
                </button>
              </Link>
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:border-custom-orange  hover:text-custom-orange"
              >
                <button className="flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/facebook.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">Facebook</p>
                </button>
              </Link>
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:border-custom-orange  hover:text-custom-orange"
              >
                <button className="flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/tiktok.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">TikTok</p>
                </button>
              </Link>
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:border-custom-orange  hover:text-custom-orange"
              >
                <button className="flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/twitch.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">Twitch</p>
                </button>
              </Link>
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:border-custom-orange  hover:text-custom-orange"
              >
                <button className="flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/rutube.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">RuTube</p>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col mt-[92px] lg:w-[50%]">
            <p className="text-custom-gray  mb-5">Затем выберите услугу</p>
            <div className="grid grid-cols-2 gap-[24px] ">
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:border-custom-orange  hover:text-custom-orange"
              >
                <button className="flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/subs.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">Подписчики</p>
                </button>
              </Link>
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:border-custom-orange  hover:text-custom-orange"
              >
                <button className="flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/viewers.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">Зрители</p>
                </button>
              </Link>
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:border-custom-orange  hover:text-custom-orange"
              >
                <button className="flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/likes.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">Лайки</p>
                </button>
              </Link>
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:border-custom-orange  hover:text-custom-orange"
              >
                <button className="flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/stats.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">Статистика</p>
                </button>
              </Link>
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:border-custom-orange  hover:text-custom-orange"
              >
                <button className="flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/views.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">Просмотры</p>
                </button>
              </Link>
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:border-custom-orange  hover:text-custom-orange"
              >
                <button className="flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/igtv.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">IGTV</p>
                </button>
              </Link>
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:border-custom-orange  hover:text-custom-orange"
              >
                <button className="flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/comments.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">Комментарии</p>
                </button>
              </Link>
              <Link
                href="#"
                className="border-0 hover:border rounded-2xl hover:border-custom-orange  hover:text-custom-orange"
              >
                <button className=" flex items-center p-[12px]">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/socialsTable/reels.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  ></Image>
                  <p className="font-bold">Reels</p>
                </button>
              </Link>
            </div>
            <button className="bg-custom-orange py-[24px] rounded-xl text-white my-10">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mt-[150px]">
          <h1
            className={`font-bold text-[36px] ${unboundedFont.variable} font-unbounded`}
          >
            Отзывы клиентов
          </h1>
          <div className="flex space-x-10">
            <div
              ref={navigationPrevRef}
              className={`swiper-button-prev hidden md:block`}
            >
              <Image
                src={"/Arrowleft.svg"}
                width={20}
                height={20}
                alt={"img"}
              ></Image>
            </div>
            <div
              ref={navigationNextRef}
              className="swiper-button-next  hidden md:block"
            >
              <Image
                src={"/Arrowright.svg"}
                width={20}
                height={20}
                alt={"img"}
              ></Image>
            </div>
          </div>
        </div>
        <div className="mt-20 ">
          <Swiper
            className="hidden md:block"
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            breakpoints={{
              768: {
                // width: 768,
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className="space-y-12">
                <p className="text-custom-gray leading-[29px]">
                  SMMSMM помог мне продвинуть канал на YouTube. Заказывал
                  подписчиков и лайки, все прошло быстро и качественно, всем
                  рекомендую!
                </p>
                <div className="flex items-center">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/viewer.svg"}
                    width={25}
                    height={25}
                    alt={"img"}
                  ></Image>
                  <div className="">
                    <p>Александр</p>
                    <Image
                      className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                      src={"/starsviewers.svg"}
                      width={60}
                      height={60}
                      alt={"img"}
                    ></Image>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="space-y-12">
                <p className="text-custom-gray leading-[29px]">
                  SMMSMM помог мне продвинуть канал на YouTube. Заказывал
                  подписчиков и лайки, все прошло быстро и качественно, всем
                  рекомендую!
                </p>
                <div className="flex items-center">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/viewer.svg"}
                    width={25}
                    height={25}
                    alt={"img"}
                  ></Image>
                  <div className="">
                    <p>Александр</p>
                    <Image
                      className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                      src={"/starsviewers.svg"}
                      width={60}
                      height={60}
                      alt={"img"}
                    ></Image>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="space-y-12">
                <p className="text-custom-gray leading-[29px]">
                  SMMSMM помог мне продвинуть канал на YouTube. Заказывал
                  подписчиков и лайки, все прошло быстро и качественно, всем
                  рекомендую!
                </p>
                <div className="flex items-center">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/viewer.svg"}
                    width={25}
                    height={25}
                    alt={"img"}
                  ></Image>
                  <div className="">
                    <p>Александр</p>
                    <Image
                      className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                      src={"/starsviewers.svg"}
                      width={60}
                      height={60}
                      alt={"img"}
                    ></Image>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="space-y-12">
                <p className="text-custom-gray leading-[29px]">
                  SMMSMM помог мне продвинуть канал на YouTube. Заказывал
                  подписчиков и лайки, все прошло быстро и качественно, всем
                  рекомендую!
                </p>
                <div className="flex items-center">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/viewer.svg"}
                    width={25}
                    height={25}
                    alt={"img"}
                  ></Image>
                  <div className="">
                    <p>Александр</p>
                    <Image
                      className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                      src={"/starsviewers.svg"}
                      width={60}
                      height={60}
                      alt={"img"}
                    ></Image>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="space-y-12">
                <p className="text-custom-gray leading-[29px]">
                  SMMSMM помог мне продвинуть канал на YouTube. Заказывал
                  подписчиков и лайки, все прошло быстро и качественно, всем
                  рекомендую!
                </p>
                <div className="flex items-center">
                  <Image
                    className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                    src={"/viewer.svg"}
                    width={25}
                    height={25}
                    alt={"img"}
                  ></Image>
                  <div className="">
                    <p>Александр</p>
                    <Image
                      className="flex items-center  border-0 hover:border rounded-2xl mr-6"
                      src={"/starsviewers.svg"}
                      width={60}
                      height={60}
                      alt={"img"}
                    ></Image>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mt-[300px]">
        <div className="flex items-center justify-between md:flex-row flex-col-reverse ">
          <div className="space-y-10 relative md:mt-0 mt-20">
            <h1
              className={`${unboundedFont.variable} font-unbounded font-bold text-[36px] leading-[72px]`}
            >
              Скидки{" "}
              <span className="ml-3  md:px-[22px] md:py-[14px] text-custom-orange md:bg-custom-orange md:bg-opacity-20 text-[36px] md:text-[24px] leading-[36px] rounded-3xl">
                до 50%
              </span>{" "}
              <br />в нашем
              <br className="md:hidden block " />
              телеграм-канале
            </h1>
            <p className="text-custom-gray">
              Раздаем промокоды в Telegram каждую неделю
            </p>
            <button className="text-white bg-custom-orange rounded-2xl py-[18px] px-[32px]">
              Получить промокод
            </button>
          </div>
          <div className="">
            <Image
              className="absolute md:right-[45%] right-0 rotate-[120deg] md:rotate-0"
              src={"/telegramflyes.svg"}
              width={100}
              height={100}
              alt={"img"}
            ></Image>
            <Image
              className="z-10"
              src={"/wheeltelegram.svg"}
              width={500}
              height={500}
              alt={"img"}
            ></Image>
          </div>
        </div>
      </div>
      <div className="mt-[300px]">
        <h1
          className={`font-bold ${unboundedFont.variable} font-unbounded text-[36px]`}
        >
          Как работает SMM<span className="text-custom-orange">Flow</span>
        </h1>
        <div className="flex justify-center mt-20 flex-col space-y-20">
          <div className="flex justify-center items-center md:items-start flex-col md:flex-row md:justify-between md:space-x-20 md:space-y-0 space-y-5">
            <div className="flex justify-between space-x-3 md:space-x-20 flex-row-reverse md:flex-row md:items-start items-center w-full">
              <Image
                className="md:w-[280px] w-[25%]"
                src={"/01.svg"}
                width={280}
                height={280}
                alt={"img"}
              ></Image>
              <h2
                className={`font-bold ${unboundedFont.variable} font-unbounded text-[24px] leading-[36px] md:w-[40%]`}
              >
                Настройка
              </h2>
            </div>
            <p className="md:w-[35%] w-[95%] text-custom-gray text-[18px]">
              Добавьте YouTube-канал, выберите настройки таргетинга: страны,
              города, возраст, пол, интересы ЦА и удобный недельный бюджет
              продвижения
            </p>
          </div>
          <div className="flex justify-center items-center md:items-start flex-col md:flex-row md:justify-between md:space-x-20 md:space-y-0 space-y-5">
            <div className="flex justify-between space-x-3 md:space-x-20 flex-row-reverse md:flex-row md:items-start items-center w-full">
              <Image
                className="md:w-[280px] w-[25%]"
                src={"/02.svg"}
                width={280}
                height={280}
                alt={"img"}
              ></Image>
              <h2
                className={`font-bold ${unboundedFont.variable} font-unbounded text-[24px] leading-[36px] md:w-[40%]`}
              >
                Оплата
              </h2>
            </div>
            <p className="md:w-[35%] w-[95%] text-custom-gray text-[18px]">
              Оплатите продвижение любым удобным способом (по карте / Paypal /
              ЮMoney и др.) Пополняйте баланс кабинета для непрерывного
              продвижения канала
            </p>
          </div>
          <div className="flex justify-center items-center md:items-start flex-col md:flex-row md:justify-between md:space-x-20 md:space-y-0 space-y-5">
            <div className="flex justify-between space-x-3 md:space-x-20 flex-row-reverse md:flex-row md:items-start items-center w-full">
              <Image
                className="md:w-[280px] w-[25%]"
                src={"/03.svg"}
                width={280}
                height={280}
                alt={"img"}
              ></Image>
              <h2
                className={`font-bold ${unboundedFont.variable} font-unbounded text-[24px] leading-[36px] md:w-[40%]`}
              >
                Старт
              </h2>
            </div>
            <p className="md:w-[35%] w-[95%] text-custom-gray text-[18px]">
              Продвижение канала начинается на самом YouTube. Видео показывают
              пользователям, интересующимся Вашей тематикой. Следить за этим
              процессом можно в личном кабинете
            </p>
          </div>
          <div className="flex justify-center items-center md:items-start flex-col md:flex-row md:justify-between md:space-x-20 md:space-y-0 space-y-5">
            <div className="flex justify-between space-x-3 md:space-x-20 flex-row-reverse md:flex-row md:items-start items-center w-full">
              <Image
                className="md:w-[280px] w-[25%]"
                src={"/04.svg"}
                width={280}
                height={280}
                alt={"img"}
              ></Image>
              <h2
                className={`font-bold ${unboundedFont.variable} font-unbounded text-[24px] leading-[36px] md:w-[40%]`}
              >
                Результат
              </h2>
            </div>
            <p className="md:w-[35%] w-[95%] text-custom-gray text-[18px]">
              Вы получаете настоящих заинтересованных подписчиков, лайки и
              комментарии. В личном кабинете Вы найдете подробную статистику по
              продвижению
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[200px] ">
        <h1
          className={`font-bold ${unboundedFont.variable} font-unbounded text-[36px]`}
        >
          Преимущества
        </h1>
        <div className="flex space-x-10 justify-center mt-10 flex-col xl:flex-row items-center xl:items-end">
          <div className="py-[24px] pr-[148px] flex text-end items-end justify-end">
            <div className="space-y-10 hidden xl:block">
              <p>Пункт 1</p>
              <p>Пункт 2</p>
              <p>Пункт 3</p>
              <p>Пункт 4</p>
            </div>
          </div>
          <div className="bg-custom-orange rounded-2xl py-[24px] px-[35px] md:px-[74px] w-[70%] xl:w-auto">
            <div className="text-white space-y-10">
              <button className="bg-white px-[20px] py-[24px] rounded-2xl">
                <Image
                  src={"/Logo.svg"}
                  width={100}
                  height={20}
                  alt={"logo"}
                ></Image>
              </button>
              <div className="justify-between flex items-center xl:hidden">
                <div className="text-start space-y-10 flex-col flex xl:hidden">
                  <p>Пункт 1</p>
                  <p>Пункт 2</p>
                  <p>Пункт 3</p>
                  <p>Пункт 4</p>
                </div>
                <div className="text-start space-y-10 items-end xl:items-center flex flex-col">
                  <p>1-2%</p>
                  <p>95% успеха</p>
                  <p>Высокая</p>
                  <p>{` > 1000`}</p>
                </div>
              </div>
              <div className="text-start space-y-10 items-center flex-col hidden xl:flex">
                <p>1-2%</p>
                <p>95% успеха</p>
                <p>Высокая</p>
                <p>{` > 1000`}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl py-[24px] px-[35px] md:px-[74px] w-[70%] xl:w-auto">
            <div className=" space-y-10">
              <button className="py-[24px]">
                <p className="font-bold h-[20px]">Другие сайты</p>
              </button>
              <div className="justify-between flex items-center xl:hidden">
                <div className="text-start space-y-10 flex-col flex xl:hidden">
                  <p>Пункт 1</p>
                  <p>Пункт 2</p>
                  <p>Пункт 3</p>
                  <p>Пункт 4</p>
                </div>
                <div className="text-start space-y-10 items-end xl:items-center flex flex-col">
                  <p>1-2%</p>
                  <p>95% успеха</p>
                  <p>Высокая</p>
                  <p>{` > 1000`}</p>
                </div>
              </div>
              <div className="text-start text-custom-black space-y-10 items-center flex-col hidden xl:flex">
                <p>1-2%</p>
                <p>95% успеха</p>
                <p>Высокая</p>
                <p>{` > 1000`}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl py-[24px] px-[35px] md:px-[74px] w-[70%] xl:w-auto ">
            <div className="space-y-10">
              <button className="py-[24px]">
                <p className="font-bold h-[20px]">Официальная реклама</p>
              </button>
              <div className="justify-between flex items-center xl:hidden">
                <div className="text-start space-y-10 flex-col flex xl:hidden">
                  <p>Пункт 1</p>
                  <p>Пункт 2</p>
                  <p>Пункт 3</p>
                  <p>Пункт 4</p>
                </div>
                <div className="text-start space-y-10 items-end xl:items-center flex flex-col">
                  <p>1-2%</p>
                  <p>95% успеха</p>
                  <p>Высокая</p>
                  <p>{` > 1000`}</p>
                </div>
              </div>
              <div className="text-start space-y-10 items-center flex-col hidden xl:flex">
                <p>1-2%</p>
                <p>95% успеха</p>
                <p>Высокая</p>
                <p>{` > 1000`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[200px]">
        <h1
          className={`font-bold ${unboundedFont.variable} font-unbounded text-[36px] mb-10`}
        >
          Частые вопросы
        </h1>
        <div className="flex flex-col px-10 py-15 space-y-12">
          <Link href="#" className="font-[22px]">
            Почему цены на ваши услуги ниже, чем у конкурентов?
          </Link>
          <Link href="#" className="font-[22px]">
            Как вы гарантируете качество услуг?
          </Link>
          <Link href="#" className="font-[22px]">
            Как я могу узнать о статусе моего заказа?
          </Link>
          <Link href="#" className="font-[22px]">
            Как быстро выполняется заказ?
          </Link>
          <div>
            <p className="font-[22px] mb-5">
              Какие способы оплаты вы принимаете?
            </p>
            <Link href={"#"} className="text-custom-gray">
              Мы принимаем оплату различными способами, такими как банковские
              карты, Qiwi-кошелек, Payeer и криптовалюты.
            </Link>
          </div>
          <Link href="#" className="font-[22px]">
            Меня не заблокируют?
          </Link>
          <Link href="#" className="font-[22px]">
            Как я могу связаться с вами?
          </Link>
          <Link href="#" className="font-[22px]">
            Что произойдет, если мои подписчики или лайки уйдут?
          </Link>
        </div>
      </div>
      <div className="mt-[200px] px-15 items-center justify-center flex">
        <div className="flex justify-center md:justify-between md:items-start items-center md:w-[80%]">
          <div>
            <div className="md:hidden flex flex-wrap items-center justify-center mb-8">
              <Image
                src={"/socialsTable/inst.svg"}
                width={70}
                height={70}
                alt={"img"}
              ></Image>
              <Image
                src={"/socialsTable/Vk.svg"}
                width={70}
                height={70}
                alt={"img"}
              ></Image>
              <Image
                src={"/socialsTable/telegram.svg"}
                width={70}
                height={70}
                alt={"img"}
              ></Image>
              <Image
                src={"/socialsTable/twitch.svg"}
                width={70}
                height={70}
                alt={"img"}
              ></Image>
              <Image
                src={"/socialsTable/telegram.svg"}
                width={70}
                height={70}
                alt={"img"}
              ></Image>
              <Image
                src={"/socialsTable/youtube.svg"}
                width={70}
                height={70}
                alt={"img"}
              ></Image>
              <Image
                src={"/socialsTable/twitter.svg"}
                width={70}
                height={70}
                alt={"img"}
              ></Image>
              <Image
                src={"/socialsTable/facebook.svg"}
                width={70}
                height={70}
                alt={"img"}
              ></Image>
              <Image
                src={"/socialsTable/tiktok.svg"}
                width={70}
                height={70}
                alt={"img"}
              ></Image>
              <Image
                src={"/socialsTable/facebook.svg"}
                width={70}
                height={70}
                alt={"img"}
              ></Image>
            </div>
            <h1
              className={`font-bold ${unboundedFont.variable} font-unbounded text-[36px] mb-10`}
            >
              Закажите больше активности
              <br /> в ваших социальных сетях
            </h1>
            <button className="text-white bg-custom-orange rounded-2xl px-[32px] py-[18px]">
              Начать продвижение
            </button>
          </div>
          <Image
            className="hidden md:block"
            src={"/listsocials.svg"}
            width={150}
            height={150}
            alt={"img"}
          ></Image>
        </div>
      </div>
    </div>
  );
}
