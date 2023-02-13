import Image from 'next/image';
import React, { useState } from 'react'
import { Select, Option } from "@material-tailwind/react";

const SocialsList = () => {
  const [activeListSocials, setActiveListSocials] = useState(false);

  

  return (
    <div
      onClick={() => setActiveListSocials(!activeListSocials)}
      className="md:w-[40%] w-full relative"
    >
      {activeListSocials ? (
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
        label="Выберите соц. сеть"
        arrow={``}
      >
        <Option>
          <div className="flex items-center space-x-3 mt-2">
            <Image
              src={"/Services/Instagram.svg"}
              width={30}
              height={30}
              alt={"Instagram"}
            ></Image>
            <p>Instagram</p>
          </div>
        </Option>
        <Option>
          <div className="flex items-center space-x-3 mt-2">
            <Image
              src={"/Services/Vk.svg"}
              width={30}
              height={30}
              alt={"Arrow"}
            ></Image>
            <p>Vk</p>
          </div>
        </Option>
        <Option>
          <div className="flex items-center space-x-3 mt-2">
            <Image
              src={"/Services/Telegram.svg"}
              width={30}
              height={30}
              alt={"Arrow"}
            ></Image>
            <p>Telegram</p>
          </div>
        </Option>
        <Option>
          <div className="flex items-center space-x-3 mt-2">
            <Image
              src={"/Services/TikTok.svg"}
              width={30}
              height={30}
              alt={"TikTok"}
            ></Image>
            <p>Tik Tok</p>
          </div>
        </Option>
        <Option>
          <div className="flex items-center space-x-3 mt-2">
            <Image
              src={"/Services/Twitter.svg"}
              width={30}
              height={30}
              alt={"Twitter"}
            ></Image>
            <p>Twitter</p>
          </div>
        </Option>
        <Option>
          <div className="flex items-center space-x-3 mt-2">
            <Image
              src={"/Services/Youtube.svg"}
              width={30}
              height={30}
              alt={"Youtube"}
            ></Image>
            <p>YouTube</p>
          </div>
        </Option>
        <Option>
          <div className="flex items-center space-x-3 mt-2">
            <Image
              src={"/Services/Facebook.svg"}
              width={30}
              height={30}
              alt={"Facebook"}
            ></Image>
            <p>Facebook</p>
          </div>
        </Option>
      </Select>
    </div>
  );
}

export default SocialsList