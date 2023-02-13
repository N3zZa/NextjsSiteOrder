import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



const   MakingOrderMobile = () => {
    const [count, setCount] = useState(1);
   const[activeRate, setActiveRate] = useState(false);

const onClickOflHide = () => {
  document.querySelector("body").classList.add("overflow-hidden");
};
const onClickOflShow = () => {
  document.querySelector("body").classList.remove("overflow-hidden");
};

  const onClickOpenMenu = () => {
    onClickOflShow()
    setActiveRate(true)
  }
  const onClickCloseMenu = () => {
    onClickOflHide()
    setActiveRate(false)
  };
  const onClickTakeRate = () => {
    onClickOflHide();
    setActiveRate(false);
    setCount(count + 1)
  };

  

  return (
    <div className="space-y-10 flex flex-col mb-[100px]">
      <div className="space-y-7">
        <div className="space-y-3 relative">
          <div className="border-b-4 border-white rouned-2xl w-full flex">
            <div
              className={`border-b-4 border-custom-orange rouned-2xl w-[25%]`}
            ></div>
            <div
              className={`border-b-4 rouned-2xl ${
                count > 1 ? "border-custom-orange" : "border-white"
              } w-[25%]`}
            ></div>
            <div
              className={`border-b-4 border-white rouned-2xl ${
                count > 2 ? "border-custom-orange" : "border-white"
              } w-[25%]`}
            ></div>
            <div
              className={`border-b-4 border-white rouned-2xl ${
                count > 3 ? "border-custom-orange" : "border-white"
              } w-[25%]`}
            ></div>
          </div>
          {count === 1 && (
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[#B0B0B0]">Шаг {count} из 4</span>
                <span className="text-[#B0B0B0]">Выбор соц. сети</span>
              </div>
              <p className="font-[700] tracking-wide text-[20px]">
                Выберите социальную сеть
              </p>
              <div className="grid grid-cols-2 space-y-7">
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center mt-5 space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[35px] h-[35px]"
                    src={"/Services/Instagram.svg"}
                    width={30}
                    height={30}
                    alt={"Instagram"}
                  ></Image>
                  <p>Instagram</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[35px] h-[35px]"
                    src={"/Services/Vk.svg"}
                    width={30}
                    height={30}
                    alt={"Arrow"}
                  ></Image>
                  <p>Vk</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[35px] h-[35px]"
                    src={"/Services/Telegram.svg"}
                    width={30}
                    height={30}
                    alt={"Arrow"}
                  ></Image>
                  <p>Telegram</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[35px] h-[35px]"
                    src={"/Services/TikTok.svg"}
                    width={30}
                    height={30}
                    alt={"TikTok"}
                  ></Image>
                  <p>Tik Tok</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[35px] h-[35px]"
                    src={"/Services/Twitter.svg"}
                    width={30}
                    height={30}
                    alt={"Twitter"}
                  ></Image>
                  <p>Twitter</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[35px] h-[35px]"
                    src={"/Services/Youtube.svg"}
                    width={30}
                    height={30}
                    alt={"Youtube"}
                  ></Image>
                  <p>YouTube</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[35px] h-[35px]"
                    src={"/Services/Facebook.svg"}
                    width={30}
                    height={30}
                    alt={"Facebook"}
                  ></Image>
                  <p>Facebook</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[35px] h-[35px]"
                    src={"/Services/Twitch.svg"}
                    width={30}
                    height={30}
                    alt={"Twitch"}
                  ></Image>
                  <p>Twitch</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[35px] h-[35px]"
                    src={"/Services/Rutube.svg"}
                    width={30}
                    height={30}
                    alt={"RuTube"}
                  ></Image>
                  <p>RuTube</p>
                </div>
              </div>
            </div>
          )}
          {count === 2 && (
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[#B0B0B0]">Шаг {count} из 4</span>
                <span className="text-[#B0B0B0]">Выбор услуги</span>
              </div>
              <div
                onClick={() => setCount(count - 1)}
                className="flex items-center space-x-2 text-[#B0B0B0]"
              >
                <span>
                  <Image
                    src={"/Arrowleft.svg"}
                    width={8}
                    height={8}
                    alt={"Instagram"}
                  ></Image>
                </span>{" "}
                <p>Назад</p>
              </div>
              <p className="font-[700] tracking-wide text-[20px]">
                Выберите услугу
              </p>
              <div className="grid grid-cols-2 space-y-7">
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center mt-5 space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[50px] h-[50px]"
                    src={"/socialsTable/subs.svg"}
                    width={30}
                    height={30}
                    alt={"Instagram"}
                  ></Image>
                  <p>Instagram</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[50px] h-[50px]"
                    src={"/socialsTable/viewers.svg"}
                    width={30}
                    height={30}
                    alt={"Arrow"}
                  ></Image>
                  <p>Vk</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[50px] h-[50px]"
                    src={"/socialsTable/likes.svg"}
                    width={30}
                    height={30}
                    alt={"Arrow"}
                  ></Image>
                  <p>Telegram</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[50px] h-[50px]"
                    src={"/socialsTable/stats.svg"}
                    width={30}
                    height={30}
                    alt={"TikTok"}
                  ></Image>
                  <p>Tik Tok</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[50px] h-[50px]"
                    src={"/socialsTable/views.svg"}
                    width={30}
                    height={30}
                    alt={"Twitter"}
                  ></Image>
                  <p>Twitter</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[50px] h-[50px]"
                    src={"/socialsTable/igtv.svg"}
                    width={30}
                    height={30}
                    alt={"Youtube"}
                  ></Image>
                  <p>YouTube</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[50px] h-[50px]"
                    src={"/socialsTable/comments.svg"}
                    width={30}
                    height={30}
                    alt={"Facebook"}
                  ></Image>
                  <p>Facebook</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center flex-col justify-center space-y-2"
                >
                  <Image
                    className="sm:w-[45px] sm:h-[45px] w-[50px] h-[50px]"
                    src={"/socialsTable/reels.svg"}
                    width={30}
                    height={30}
                    alt={"Twitch"}
                  ></Image>
                  <p>Twitch</p>
                </div>
              </div>
            </div>
          )}
          {count === 3 && (
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[#B0B0B0]">Шаг {count} из 4</span>
                <span className="text-[#B0B0B0]">Выбор тарифа</span>
              </div>
              <div
                onClick={() => setCount(count - 1)}
                className="flex items-center space-x-2 text-[#B0B0B0]"
              >
                <span>
                  <Image
                    src={"/Arrowleft.svg"}
                    width={8}
                    height={8}
                    alt={"Instagram"}
                  ></Image>
                </span>{" "}
                <p>Назад</p>
              </div>
              <p className="font-[700] tracking-wide text-[20px]">
                Выберите тариф
              </p>
              <div className="flex flex-col space-y-10">
                <div className="flex items-center space-x-3 mt-2 justify-between">
                  <div onClick={() => setCount(count + 1)} className="w-[80%]">
                    <p> Русские 🔥</p>
                  </div>
                  <div className="flex space-x-1">
                    <p className="uppercase bg-custom-orange bg-opacity-20 text-custom-orange p-1 rounded-md">
                      хит
                    </p>
                    <Image
                      onClick={() => onClickOpenMenu()}
                      src={"/Error.svg"}
                      width={30}
                      height={30}
                      alt={"Instagram"}
                    ></Image>
                  </div>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center space-x-3 mt-2"
                >
                  <p> Боты быстрые</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center space-x-3 mt-2"
                >
                  <p> Живые ⭐️ Гарантия</p>
                </div>
                <div className="flex items-center space-x-3 mt-2 justify-between">
                  <div onClick={() => setCount(count + 1)} className="w-[80%]">
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
                  </div>

                  <div className="flex space-x-1">
                    <p className="uppercase bg-custom-orange bg-opacity-20 text-custom-orange p-1 rounded-md">
                      хит
                    </p>
                    <Image
                      onClick={() => onClickOpenMenu()}
                      src={"/Error.svg"}
                      width={30}
                      height={30}
                      alt={"Instagram"}
                    ></Image>
                  </div>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center space-x-3 mt-2"
                >
                  <p> Живые ❤️</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center space-x-3 mt-2 justify-between"
                >
                  <p> Русские + Микс ⭐️ </p>
                  <div className="flex space-x-1">
                    <p className="bg-[#27AE60] bg-opacity-20 text-[#27AE60] p-1 rounded-md">
                      Гарантия
                    </p>
                    <Image
                      onClick={() => onClickOpenMenu()}
                      src={"/Error.svg"}
                      width={30}
                      height={30}
                      alt={"Instagram"}
                    ></Image>
                  </div>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="flex items-center space-x-3 mt-2"
                >
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
              </div>
              {activeRate && (
                <div className="font-nunito">
                  <div className="fixed right-0 top-0 left-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20 z-50"></div>
                  <div className="fixed m-0 w-[100%] left-0 bottom-0 h-[100%] items-end md:items-center z-50 flex justify-center md:m-auto">
                    <div className="bg-white p-[29px] relative rounded-2xl md:h-auto md:w-auto h-[60%] w-[100%]">
                      <svg
                        onClick={() => onClickCloseMenu()}
                        className="h-6 w-6 cursor-pointer text-gray-400 absolute right-4 top-5"
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
                      <div className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-5">
                          <h1 className="font-[600] font-unbounded text-[24px]">
                            Русские 🔥
                          </h1>
                          <div className="bg-custom-orange bg-opacity-20 text-custom-orange px-2 py-1 rounded-2xl w-[50px] justify-center items-center">
                            <p className="uppercase">хит</p>
                          </div>
                        </div>
                        <div className="space-y-5">
                          <p className="text-custom-gray leading-[29px] text-[18px]">
                            Подписываются живые люди со всего мира. Все отписки
                            и списания мы будем восстанавливать автоматически в
                            течение 60 дней после заказа.
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="p-2 border border-gray-300 rounded-2xl font-bold">
                              <p>🌍 Со всего мира</p>
                            </div>
                            <div className="p-2 border border-gray-300 rounded-2xl font-bold">
                              <p>🚀 Скорость до 10К/день</p>
                            </div>
                            <div className="p-2 border border-gray-300 rounded-2xl font-bold">
                              <p>⚡ Быстрый старт</p>
                            </div>
                            <div className="p-2 border border-gray-300 rounded-2xl font-bold">
                              <p>⭐️ Гарантия 60 дней</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sm:mt-[25%] mt-[10%]">
                        <button
                          onClick={() => onClickTakeRate()}
                          className="bg-custom-orange text-white p-[14px] rounded-2xl w-full"
                        >
                          Выбрать этот тариф
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {count === 4 && (
            <div className="space-y-3 h-full">
              <div className="flex justify-between">
                <span className="text-[#B0B0B0]">Шаг {count} из 4</span>
                <span className="text-[#B0B0B0]">Информация о заказе</span>
              </div>
              <div
                onClick={() => setCount(count - 1)}
                className="flex items-center space-x-2 text-[#B0B0B0]"
              >
                <span>
                  <Image
                    src={"/Arrowleft.svg"}
                    width={8}
                    height={8}
                    alt={"Instagram"}
                  ></Image>
                </span>{" "}
                <p>Назад</p>
              </div>
              <div className="space-y-3 relative ">
                <p className=" font-[700]">Ссылка на профиль</p>
                <input
                  className="border border-gray p-[14px] rounded-2xl w-[100%]  outline-custom-orange"
                  type="text"
                  placeholder="Вставьте ссылку"
                />
              </div>
              <span className="text-custom-gray text-[14px]">
                Профиль должен быть открытым для правильной
                <br /> работы наших услуг.
              </span>
              <div className="space-y-3 relative">
                <p className=" font-[700]">Кол-во подписчиков</p>
                <input
                  className="border border-gray p-[14px] rounded-2xl w-[100%]  outline-custom-orange"
                  type="text"
                  placeholder="Вставьте ссылку"
                />
              </div>
              <span className="text-custom-gray text-[14px]">
                От 100 до 100 000
              </span>
              <div className="space-y-3 h-full">
                <div className="flex justify-between w-full">
                  <p className=" font-[700]">Промокод</p>
                  <div className="flex space-x-2">
                    <Image
                      src={"/PromoCode.svg"}
                      width={25}
                      height={25}
                      alt={"PromoCode"}
                    ></Image>

                    <p className="text-custom-orange">Получить промокод</p>
                  </div>
                </div>
                <input
                  className="border border-gray p-[14px] rounded-2xl w-[100%]  outline-custom-orange"
                  type="text"
                  placeholder="Введите промокод"
                />
                  <Link className="mt-auto w-full" href="/profile/orderPayment">
                    <button
                      className={`bg-[#E0E0E0] cursor-no-drop
        p-[14px] text-white rounded-2xl w-[100%]`}
                    >
                      Оплатить
                    </button>
                  </Link>
                {/* <div className="flex space-x-3 bg-red-100 rounded-2xl py-[8px] px-[20px]">
                  <Image
                    src={"/Profile/Error.svg"}
                    width={30}
                    height={30}
                    alt={"Error"}
                  ></Image>
                  <p className="text-red-400">
                    Ошибка создания заказа, попробуйте позже или обратитесь{" "}
                    <a href="" className="text-blue-400 underline">
                      в поддержку
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MakingOrderMobile