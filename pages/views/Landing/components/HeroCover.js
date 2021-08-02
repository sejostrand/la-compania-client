import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroCover = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setTimeout(updateImage, 1800);
    clearTimeout();
  }, [imageIndex]);

  const images = [
    '/media/ami.png',
    '/media/boy.png',
    '/media/auto.png',
    '/media/nube.png',
    '/media/lemon.png',
    '/media/manos.png',
  ];

  const updateImage = () => {
    if (imageIndex == 5) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <div className='flex flex-row justify-center items-center my-auto'>
      <Image src={images[imageIndex]} alt='figura' height={500} width={500} />
      <div className='font-lemonmilkBold flex items-center absolute text-lg lg:text-3xl transform -translate-y10'>
        La{' '}
        <span className='mx-2 text-2xl sm:ml-4 sm:text-3xl lg:mx-6 lg:text-5xl'>
          imaginación
        </span>{' '}
        es la mejor{' '}
        <span className='ml-2 text-2xl sm:ml-4 sm:text-3xl lg:ml-6 lg:text-5xl'>
          compañía
        </span>
      </div>
    </div>
  );
};

export default HeroCover;
