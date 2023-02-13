import Image from "next/image";
import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";
const ServicesList = () => {
  const [activeListServices, setActiveListServices] = useState(false);

  return (
    <div
      onClick={() => setActiveListServices(!activeListServices)}
      className="md:w-[40%] w-full relative"
    >
      {activeListServices ? (
        <Image
          className="absolute right-1 top-2"
          src={"/ArrowOrange.svg"}
          width={30}
          height={30}
          alt={"Arrow"}
        ></Image>
      ) : (
        <Image
          className="absolute right-1 top-3"
          src={"/Services/Arrow.svg"}
          width={30}
          height={30}
          alt={"Arrow"}
        ></Image>
      )}
      <Select
        className="p-[25px]"
        color="deep-orange"
        label="Выберите услугу"
        arrow={``}
      >
        <Option className="font-nunito">
          <div className="flex items-center space-x-3 mt-2">
            <Image
              src={"/ServicesMenu/Subscribers.svg"}
              width={30}
              height={30}
              alt={"Subscribers"}
            ></Image>
            <p>Подписчики</p>
          </div>
        </Option>
        <Option className="font-nunito">
          <div className="flex items-center space-x-3 mt-2">
            <Image
              src={"/ServicesMenu/Likes.svg"}
              width={30}
              height={30}
              alt={"Лайки"}
            ></Image>
            <p>Лайки</p>
          </div>
        </Option>
        <Option className="font-nunito">
          <div className="flex items-center space-x-3 mt-2">
            <Image
              src={"/ServicesMenu/Watches.svg"}
              width={30}
              height={30}
              alt={"Просмотры"}
            ></Image>
            <p>Просмотры</p>
          </div>
        </Option>
        <Option className="font-nunito">
          <div className="flex items-center space-x-3 mt-2">
            <Image
              src={"/ServicesMenu/Comments.svg"}
              width={30}
              height={30}
              alt={"Комментарии"}
            ></Image>
            <p>Комментарии</p>
          </div>
        </Option>
        <Option className="font-nunito">
          <div className="flex items-center space-x-3 mt-2">
            <Image
              src={"/ServicesMenu/Viewers.svg"}
              width={30}
              height={30}
              alt={"Зрители"}
            ></Image>
            <p>Зрители</p>
          </div>
        </Option>
        <Option className="font-nunito">
          <div className="flex items-center space-x-3 mt-2">
            <Image
              src={"/ServicesMenu/Statistics.svg"}
              width={30}
              height={30}
              alt={"Статистика"}
            ></Image>
            <p>Статистика</p>
          </div>
        </Option>
        <Option className="font-nunito">
          <div className="flex items-center space-x-3 mt-2">
            <Image
              src={"/ServicesMenu/IGTV.svg"}
              width={30}
              height={30}
              alt={"IGTV"}
            ></Image>
            <p>IGTV</p>
          </div>
        </Option>
        <Option className="font-nunito">
          <div className="flex items-center space-x-3 mt-2">
            <Image
              src={"/ServicesMenu/Reels.svg"}
              width={30}
              height={30}
              alt={"Reels"}
            ></Image>
            <p>Reels</p>
          </div>
        </Option>
      </Select>
    </div>
  );
};

export default ServicesList;
