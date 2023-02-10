import Image from "next/image";
import React from "react";
import ButtonCompleted from "./buttons/ButtonCompleted";
import ButtonError from "./buttons/ButtonError";
import ButtonSlightlyCompleted from "./buttons/ButtonSlightlyCompleted";

const OrderMobile = () => {
  return (
    <div className="justify-center flex items-center font-[600]">
      <div className="flex flex-col space-y-5 w-auto sm:w-[50%]">
        <div>
          <ButtonCompleted />
        </div>
        <div className="flex items-center space-x-4 ">
          <Image
            src={"/Services/Instagram.svg"}
            width={30}
            height={30}
            alt={"profile"}
          ></Image>
          <div>
            <p>Подписчики “Живые ❤️”</p>
            <a
              className="text-blue-500"
              href="https://www.instagram.com/durov/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/durov/
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-custom-gray flex flex-col justify-between space-y-2">
            <p>Дата и время</p>
            <p>Кол-во</p>
            <p>Цена</p>
          </div>
          <div className="flex flex-col space-y-2 items-end">
            <p>11.12.2022 в 11:50</p>
            <p>10 000</p>
            <p>{"1 000"}₽</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMobile;
