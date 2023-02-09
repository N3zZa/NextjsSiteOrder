import Image from 'next/image';
import React, { useState } from 'react'

const ServicesMain = () => {

  return (
    <div className="flex flex-col space-y-10 mb-[200px] lg:mb-[100px]">
      <div className="md:flex space-x-[120px] justify-center flex-wrap xl:justify-around md:flex-row md:items-start flex-col hidden">
        <div>
          <div className="flex items-center space-x-3">
            <Image
              className="my-7"
              src={"/Services/Instagram.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
            <p className="font-[600] leading-[24px] text-[24px]">Instagram</p>
          </div>
          <ul className="space-y-2 leading-[26px] text-custom-black">
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Подписчики
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Лайки
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Просмотры
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Комментарии
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Истории
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Зрители
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Статистика
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <Image
              className="my-7"
              src={"/Services/Telegram.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
            <p className="font-[600] leading-[24px] text-[24px]">Telegram</p>
          </div>
          <ul className="space-y-2 leading-[26px] text-custom-black">
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Подписчики
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Просмотры
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Реакции
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Голосование
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Репосты
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Старт бота
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Telegraph просмотры
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Комментарии
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <Image
              className="my-7"
              src={"/Services/Vk.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
            <p className="font-[600] leading-[24px] text-[24px]">VK</p>
          </div>
          <ul className="space-y-2 leading-[26px] text-custom-black">
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Подписчики
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Лайки
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Комментарии
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Репосты
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Просмотры на видео
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Просмотры на пост
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Накрутка опросов
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Прослушивания
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Релиз плейлиста
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <Image
              className="my-7"
              src={"/Services/TikTok.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
            <p className="font-[600] leading-[24px] text-[24px]">TikTok</p>
          </div>
          <ul className="space-y-2 leading-[26px] text-custom-black">
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Подписчики
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Лайки
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Комментарии
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Репосты
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Просмотры
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <Image
              className="my-7"
              src={"/Services/Youtube.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
            <p className="font-[600] leading-[24px] text-[24px]">YouTube</p>
          </div>
          <ul className="space-y-2 leading-[26px] text-custom-black">
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Подписчики
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Просмотры
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Просмотры трансляций
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Просмотры Shorts
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Лайки
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Дизлайки
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Комментарии
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Репосты
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Часы просмотров
            </li>
          </ul>
        </div>
      </div>
      <div className="md:flex space-x-[120px] flex-wrap xl:justify-start justify-center md:flex-row md:items-start flex-col hidden">
        <div>
          <div className="flex items-center space-x-3">
            <Image
              className="my-7"
              src={"/Services/Twitch.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
            <p className="font-[600] leading-[24px] text-[24px]">Twitch</p>
          </div>
          <ul className="space-y-2 leading-[26px] text-custom-black">
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Просмотры
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Подписчики
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Зрители
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <Image
              className="my-7"
              src={"/Services/Facebook.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
            <p className="font-[600] leading-[24px] text-[24px]">Facebook</p>
          </div>
          <ul className="space-y-2 leading-[26px] text-custom-black">
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Подписчики
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Лайки
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Просмотры
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Комментарии
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Истории
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Зрители
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Статистика
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <Image
              className="my-7"
              src={"/Services/Twitter.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
            <p className="font-[600] leading-[24px] text-[24px]">Twitter</p>
          </div>
          <ul className="space-y-2 leading-[26px] text-custom-black">
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Подписчики
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Лайки
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Комментарии
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Репосты
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Просмотры на видео
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Просмотры на пост
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Накрутка опросов
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Прослушивания
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Релиз плейлиста
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <Image
              className="my-7"
              src={"/Services/Rutube.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
            <p className="font-[600] leading-[24px] text-[24px]">RuTube</p>
          </div>
          <ul className="space-y-2 leading-[26px] text-custom-black">
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Подписчики
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Лайки
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Комментарии
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Репосты
            </li>
            <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
              Просмотры
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto my-20 w-[600px] md:hidden flex flex-col items-center justify-center space-y-5 ">
        <details className="sm:w-[90%] w-[60%]">
          <summary className="bg-inherit px-[16px] text-lg cursor-pointer list-none flex justify-between">
            <div className="flex items-center space-x-6">
              <Image
                className="my-7"
                src={"/Services/Instagram.svg"}
                width={30}
                height={30}
                alt={"logo"}
              />
              <p className="font-[600] leading-[24px] text-[24px]">Instagram</p>
            </div>
            <Image
              className="arrow"
              src={"/Services/Arrow.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
          </summary>
          <div className="bg-white px-[17px]  text-sm font-light">
            <ul>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Подписчики
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Просмотры
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Реакции
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Голосование
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Репосты
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Старт бота
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Telegraph просмотры
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Комментарии
              </li>
            </ul>
          </div>
        </details>

        <details className="sm:w-[90%] w-[60%]">
          <summary className="bg-inherit px-[16px] text-lg cursor-pointer list-none  flex justify-between">
            <div className="flex items-center space-x-6">
              <Image
                className="my-7"
                src={"/Services/Telegram.svg"}
                width={30}
                height={30}
                alt={"logo"}
              />
              <p className="font-[600] leading-[24px] text-[24px]">Telegram</p>
            </div>
            <Image
              className="arrow"
              src={"/Services/Arrow.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
          </summary>
          <div className="bg-white px-[17px]  text-sm font-light">
            <ul>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Подписчики
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Лайки
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Комментарии
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Репосты
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Просмотры на видео
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Просмотры на пост
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Накрутка опросов
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Прослушивания
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Релиз плейлиста
              </li>
            </ul>
          </div>
        </details>
        <details className="sm:w-[90%] w-[60%]">
          <summary className="bg-inherit px-[16px] text-lg cursor-pointer list-none  flex justify-between">
            <div className="flex items-center space-x-6">
              <Image
                className="my-7"
                src={"/Services/Vk.svg"}
                width={30}
                height={30}
                alt={"logo"}
              />
              <p className="font-[600] leading-[24px] text-[24px]">VK</p>
            </div>
            <Image
              className="arrow"
              src={"/Services/Arrow.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
          </summary>
          <div className="bg-white px-[17px]  text-sm font-light">
            <ul>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Подписчики
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Лайки
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Комментарии
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Репосты
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Просмотры
              </li>
            </ul>
          </div>
        </details>
        <details className="sm:w-[90%] w-[60%]">
          <summary className="bg-inherit px-[16px] text-lg cursor-pointer list-none  flex justify-between">
            <div className="flex items-center space-x-6">
              <Image
                className="my-7"
                src={"/Services/TikTok.svg"}
                width={30}
                height={30}
                alt={"logo"}
              />
              <p className="font-[600] leading-[24px] text-[24px]">TikTok</p>
            </div>
            <Image
              className="arrow"
              src={"/Services/Arrow.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
          </summary>
          <div className="bg-white px-[17px]  text-sm font-light">
            <ul>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Подписчики
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Просмотры
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Просмотры трансляций
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Просмотры Shorts
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Лайки
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Дизлайки
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Комментарии
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Репосты
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Часы просмотров
              </li>
            </ul>
          </div>
        </details>
        <details className="sm:w-[90%] w-[60%]">
          <summary className="bg-inherit px-[16px] text-lg cursor-pointer list-none  flex justify-between">
            <div className="flex items-center space-x-6">
              <Image
                className="my-7"
                src={"/Services/YouTube.svg"}
                width={30}
                height={30}
                alt={"logo"}
              />
              <p className="font-[600] leading-[24px] text-[24px]">YouTube</p>
            </div>
            <Image
              className="arrow"
              src={"/Services/Arrow.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
          </summary>
          <div className="bg-white px-[17px]  text-sm font-light">
            <ul>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Просмотры
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Подписчики
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Зрители
              </li>
            </ul>
          </div>
        </details>
        <details className="sm:w-[90%] w-[60%]">
          <summary className="bg-inherit px-[16px] text-lg cursor-pointer list-none  flex justify-between">
            <div className="flex items-center space-x-6">
              <Image
                className="my-7"
                src={"/Services/Twitch.svg"}
                width={30}
                height={30}
                alt={"logo"}
              />
              <p className="font-[600] leading-[24px] text-[24px]">Twitch</p>
            </div>
            <Image
              className="arrow"
              src={"/Services/Arrow.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
          </summary>
          <div className="bg-white px-[17px]  text-sm font-light">
            <ul>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Подписчики
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Лайки
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Просмотры
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Комментарии
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Истории
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Зрители
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Статистика
              </li>
            </ul>
          </div>
        </details>
        <details className="sm:w-[90%] w-[60%]">
          <summary className="bg-inherit px-[16px] text-lg cursor-pointer list-none  flex justify-between">
            <div className="flex items-center space-x-6">
              <Image
                className="my-7"
                src={"/Services/Facebook.svg"}
                width={30}
                height={30}
                alt={"logo"}
              />
              <p className="font-[600] leading-[24px] text-[24px]">Facebook</p>
            </div>
            <Image
              className="arrow"
              src={"/Services/Arrow.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
          </summary>
          <div className="bg-white px-[17px]  text-sm font-light">
            <ul>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Подписчики
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Просмотры
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Реакции
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Голосование
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Репосты
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Старт бота
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Telegraph просмотры
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Комментарии
              </li>
            </ul>
          </div>
        </details>
        <details className="sm:w-[90%] w-[60%]">
          <summary className="bg-inherit px-[16px] text-lg cursor-pointer list-none  flex justify-between">
            <div className="flex items-center space-x-6">
              <Image
                className="my-7"
                src={"/Services/Twitter.svg"}
                width={30}
                height={30}
                alt={"logo"}
              />
              <p className="font-[600] leading-[24px] text-[24px]">Twitter</p>
            </div>
            <Image
              className="arrow"
              src={"/Services/Arrow.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
          </summary>
          <div className="bg-white px-[17px]  text-sm font-light">
            <ul>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Подписчики
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Лайки
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Комментарии
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Репосты
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Просмотры на видео
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Просмотры на пост
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Накрутка опросов
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Прослушивания
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Релиз плейлиста
              </li>
            </ul>
          </div>
        </details>
        <details className="w-[90%]">
          <summary className="bg-inherit px-[16px] text-lg cursor-pointer list-none  flex justify-between">
            <div className="flex items-center space-x-6">
              <Image
                className="my-7"
                src={"/Services/Rutube.svg"}
                width={30}
                height={30}
                alt={"logo"}
              />
              <p className="font-[600] leading-[24px] text-[24px]">RuTube</p>
            </div>
            <Image
              className="arrow"
              src={"/Services/Arrow.svg"}
              width={30}
              height={30}
              alt={"logo"}
            />
          </summary>
          <div className="bg-white px-[17px]  text-sm font-light">
            <ul>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Подписчики
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Лайки
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Комментарии
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Репосты
              </li>
              <li className="hover:text-custom-orange cursor-default leading-[26px] text-custom-black">
                Просмотры
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
}

export default ServicesMain