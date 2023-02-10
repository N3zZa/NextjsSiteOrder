import React from "react";
import ButtonCompleted from "./buttons/ButtonCompleted";

const DepositsOrderMobile = () => {
  return (
    <div className="space-y-10 flex first-letter items-center justify-center">
      <div className="justify-between flex font-[600] w-[80%]">
        <div className="space-y-3">
          <p className="font-bold">{"1 000"}₽</p>
          <p className="text-custom-gray">11.12.2022</p>
        </div>
        <div>
          <ButtonCompleted />
        </div>
      </div>
    </div>
  );
}

export default DepositsOrderMobile