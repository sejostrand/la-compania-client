import React, { useState } from 'react';
import Image from 'next/image';

//import components

const About3 = () => {
  return (
    <div className='snap-view justify-center items-center'>
      <div className='absolute w-full h-screen z-0'>
        <Image src='/media/bg-about3.png' layout='fill' />
      </div>
      <div className='flex flex-col justify-center items-center m-10 z-10'>
        <>
          <div className='flex flex-col text-white font-bowl justify-between'>
            <div className='text-3xl'>
              Buscamos llevar a las marcas lo{' '}
              <span className='px-1 bg-red text-white text-3xl'>
                mas alto posible
              </span>
            </div>
            <div className='text-2xl'>
              {' '}
              Definiendo objectivos y creando lazos reales con las personas
            </div>
          </div>
        </>
        <>
          <div className='mt-12 flex flex-col items-center text-white font-bowl'>
            <div className='flex text-6xl text-justify'>Somos la Companñía</div>
            <div className='flex text-5xl text-justify bg-red px-1'>
              Que siempre imaginaste
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default About3;
