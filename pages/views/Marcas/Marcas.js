import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

const Marcas = ({ marcas }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {}, [index]);

  const indexNext = () => {
    if (index == marcas.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const indexBack = () => {
    if (index == 0) {
      setIndex(marcas.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className='snap-view flex flex-row justify-center items-center'>
      <div className='absolute flex flex-row flex-nowrap bottom-32 text-white text-5xl z-10'>
        <button className='rounded-full filter bg-gray-900 bg-opacity-80 mr-6'>
          <FiArrowLeftCircle onClick={() => indexBack()} />
        </button>
        <button className='rounded-full filter bg-gray-900 bg-opacity-80 ml-6'>
          <FiArrowRightCircle onClick={() => indexNext()} />
        </button>
      </div>

      <div className='absolute w-full h-screen z-0'>
        <img src={marcas[index].background.url} className='w-full h-screen' />
      </div>

      <div className='flex flex-row flex-wrap'>
        <div className='flex flex-col flex-nowrap'>
          <Image src='/media/ami.png' height='200' width='200' />
          <Image src='/media/ami.png' height='200' width='200' />
        </div>
        <div className=''>
          <img src='' />
        </div>
      </div>
    </div>
  );
};

export default Marcas;
