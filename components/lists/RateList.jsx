import Image from "next/image";
import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";


const RateList = ({ onMouseOver, onMouseOut }) => {
  const [activeListRate, setActiveListRate] = useState(false);

  return (
    <div
      onClick={() => setActiveListRate(!activeListRate)}
      className="md:w-[40%] w-full relative"
    >
      {activeListRate ? (
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
        className="p-[25px] font-nunito"
        color="deep-orange"
        label="Выберите тариф"
        arrow={``}
      >
        <Option
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          className="font-nunito"
        >
          <div className="flex items-center space-x-3 mt-2 justify-between">
            <p> Русские 🔥</p>
            <p className="uppercase bg-custom-orange bg-opacity-20 text-custom-orange p-1 rounded-md">
              хит
            </p>
          </div>
        </Option>
        <Option className="font-nunito">
          <div className="flex items-center space-x-3 mt-2">
            <p> Боты быстрые</p>
          </div>
        </Option>
        <Option className="font-nunito">
          <div className="flex items-center space-x-3 mt-2">
            <p> Живые ⭐️ Гарантия</p>
          </div>
        </Option>
        <Option className="font-nunito">
          {" "}
          <div className="flex items-center space-x-3 mt-2 justify-between">
            <p className="flex items-center">
              {" "}
              Микс +
              <Image
                className="ml-1"
                alt="ru"
                width={20}
                height={20}
                src={"/RateMenu/ru.png"}
              ></Image>{" "}
            </p>
            <p className="uppercase bg-custom-orange bg-opacity-20 text-custom-orange p-1 rounded-md">
              хит
            </p>
          </div>
        </Option>
        <Option className="font-nunito">
          <div className="flex items-center space-x-3 mt-2">
            <p> Живые ❤️</p>
          </div>
        </Option>
        <Option className="font-nunito">
          <div className="flex items-center space-x-3 mt-2 justify-between">
            <p> Русские + Микс ⭐️ </p>
            <p className="bg-[#27AE60] bg-opacity-20 text-[#27AE60] p-1 rounded-md">
              Гарантия
            </p>
          </div>
        </Option>
        <Option className="font-nunito">
          <div className="flex items-center space-x-3 mt-2">
            <p className="flex items-center">
              {" "}
              Живые из Украины
              <Image
                className="ml-1"
                alt="ukrain"
                width={20}
                height={20}
                src={"/RateMenu/ukraine.png"}
              ></Image>{" "}
            </p>
          </div>
        </Option>
        <Option className="font-nunito">
          <div className="flex items-center space-x-3 mt-2">
            <p className="flex items-center">
              {" "}
              С английскими именами
              <Image
                className="ml-1"
                alt="us"
                width={20}
                height={20}
                src={"/RateMenu/us.png"}
              ></Image>{" "}
            </p>
          </div>
        </Option>
        <Option className="font-nunito">
          <div className="flex items-center space-x-3 mt-2">
            <p> Частично русские ⭐</p>
          </div>
        </Option>
        <Option className="font-nunito">
          <div className="flex items-center space-x-3 mt-2">
            <p className="flex items-center">
              {" "}
              Из Ирана
              <Image
                className="ml-1"
                alt="iran"
                width={20}
                height={20}
                src={"/RateMenu/iran.png"}
              ></Image>{" "}
            </p>
          </div>
        </Option>
      </Select>
    </div>
  );
};

export default RateList;
