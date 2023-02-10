import React from 'react'
import ButtonCompleted from './buttons/ButtonCompleted';

const DepositsOrder = () => {
  return (
    <div className="space-y-10">
      <div className="justify-between flex items-center font-[600] w-[80%]">
        <p className='w-[30%]'>11.12.2022</p>
        <p className='w-[30%]'>{"1 000"}₽</p>
        <div className='w-[30%]'>
          <ButtonCompleted />
        </div>
      </div>
    </div>
  );
}

export default DepositsOrder