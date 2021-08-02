import React from 'react';
import Image from 'next/image';

const Logos = ({ logos }) => {
  console.log(logos);
  return (
    <div
      id='logos'
      class='snap-view bg-black flex justify-center items-center z-0'
    >
      <Image
        src='/media/bg-logos.jpg'
        layout='fill'
        className='absolute'
        alt='x'
      />
      <div className='grid grid-rows-4 md:grid-rows-2 ml-4 mr-56 grid-flow-col gap-4'>
        {logos.map((logo) => {
          return (
            <div className=''>
              <Image src={logo.logo.url} width={150} height={150} alt='x' />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Logos;
