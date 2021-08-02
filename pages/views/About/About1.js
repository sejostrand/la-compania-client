import React, { useState } from 'react';
import Image from 'next/image';

//import components

const About1 = () => {
  return (
    <div
      id='about1'
      className='snap-view flex flex-col bg-black justify-center items-center font-lemonmilkBold'
    >
      <div className='flex flex-col justify-center items-end max-w-5xl m-6'>
        <p className='text-white text-4xl text-right'>
          Somos personas creativas independients
        </p>
        <div className='mt-12 text-white text-4xl font-bowl text-right'>
          <p className='text-red'>Que acompañamos a las marcas</p>
          <p> en su creación, crecimiento y proceso communicacional</p>
        </div>
      </div>
    </div>
  );
};

export default About1;
