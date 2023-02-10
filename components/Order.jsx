import Image from 'next/image';
import React from 'react'
import ButtonCompleted from "./buttons/ButtonCompleted";
import ButtonError from "./buttons/ButtonError";
import ButtonSlightlyCompleted from "./buttons/ButtonSlightlyCompleted";

const Order = () => {
  return (
    <div className="justify-between flex items-center font-[600]">
      <p className="w-[10%]">11.12.2022</p>
      <div className="flex items-center space-x-4 w-[30%]">
        <Image
          src={"/Services/Instagram.svg"}
          width={30}
          height={30}
          alt={"profile"}
        ></Image>
        <div>
          <p>Подписчики “Живые ❤️”</p>
          <a className="text-blue-500" href="https://www.instagram.com/durov/" target='_blank'>
            https://www.instagram.com/durov/
          </a>
        </div>
      </div>
      <p className="w-[20%]">10 000</p>
      <p className="w-[20%]">{"1 000"}₽</p>
      <div className='w-[14%]'>
        <ButtonCompleted />
      </div>
    </div>
  );
}

export default Order