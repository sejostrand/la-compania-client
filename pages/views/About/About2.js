import React, { useState } from 'react';
import Image from 'next/image';

//import components
import Mario from './components/Mario';
import Tere from './components/Tere';

const About2 = () => {
  return (
    <div
      id='about2'
      className='snap-view bg-black flex flex-row justify-center items-center'
    >
      <div id='space' className='absolute w-full h-screen z-0 perspective'>
        <Image src='/media/bg-about2.png' layout='fill' />
      </div>
      <div className='flex flex-row flex-wrap items-center'>
        <Mario />
        <Tere />
      </div>
    </div>
  );
  S;
};

export default About2;
