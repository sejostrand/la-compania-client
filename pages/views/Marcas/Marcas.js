import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SlideControls from '../../components/SlideControls';

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

  console.log(marcas);

  return (
    <div
      id='marcas'
      className='snap-view flex flex-col justify-center items-center'
    >
      <SlideControls indexNext={indexNext} indexBack={indexBack} />

      <div className='absolute w-full h-screen z-0'>
        <Image src={marcas[index].background.url} layout='fill' alt='x' />
      </div>
      <div className='flex flex-col flex-nowrap absolute left-48'>
        <div className='m-10'>
          <Image
            src={marcas[index].insta1.url}
            height='300'
            width='300'
            alt='x'
          />
        </div>
        <div className='m-10'>
          <Image
            src={marcas[index].insta2.url}
            height='300'
            width='300'
            alt='x'
          />
        </div>
      </div>

      <div className='flex flex-col flex-wrap relative items-center'>
        <div className='flex items-center'>
          <Image
            src={marcas[index].logo.url}
            height='300'
            width='300'
            alt='x'
          />
        </div>
      </div>
      <div className='flex flex-col items-center text-white z-20 text-2xl font-lemonmilkBold absolute bottom-8'>
        <div className='flex bg-red px-1'>Marca creada desde zero</div>
        <div className='flex justify-center items-center text-white'>
          {marcas[index].tags.map((tag) => {
            return <a className='mx-4'>{tag.Tag}</a>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Marcas;
