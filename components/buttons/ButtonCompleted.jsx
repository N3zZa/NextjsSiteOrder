import { useRouter } from 'next/router';
import React from 'react'

const ButtonCompleted = () => {
  const {pathname} = useRouter();

  return (
    <button className="bg-[#27AE60] bg-opacity-20 px-[16px] py-[10px] rounded-xl text-[#27AE60] text-[18px] leading-[29px]">
      {pathname === '/profile' ? 'Завершён' : 'Оплачен'}
    </button>
  );
}

export default ButtonCompleted