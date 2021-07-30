import React, { useState } from 'react';
import Image from 'next/image';

//import components

const About1 = () => {
  return (
    <div className='snap-view flex flex-col bg-black justify-center items-center'>
      <div className='flex flex-col justify-center items-end m-6'>
        <div className='text-white max-w-lg text-4xl font-bowl text-right'>
          Somos personas creativas independients
        </div>
        <div className='mt-12 text-white max-w-2xl text-4xl font-bowl text-right'>
          <div className='text-red'>Que acompañamos a las marcas</div>
          <div> en su creación, crecimiento y proceso communicacional</div>
        </div>
      </div>
    </div>
  );
};

export default About1;
