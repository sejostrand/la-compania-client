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
        <Image src='/media/bg-about2.jpg' layout='fill' alt='x' />
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-row flex-wrap items-center mr-24'>
          <Mario />
          <div className='flex'>
            <Image src='/media/ami.png' width='300' height='300' alt='x' />
          </div>
          <Tere />
        </div>
      </div>
    </div>
  );
  S;
};

export default About2;
