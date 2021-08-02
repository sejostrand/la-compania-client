import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SlideControls from '../../components/SlideControls';

const Packaging = ({ packaging }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {}, [index]);

  const indexNext = () => {
    if (index == packaging.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const indexBack = () => {
    if (index == 0) {
      setIndex(packaging.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  console.log(packaging);
  return (
    <div
      id='packaging'
      className='snap-view bg-black flex justify-center items-center'
    >
      <SlideControls indexNext={indexNext} indexBack={indexBack} />
      <div className='absolute w-full h-screen z-0'>
        <Image src={packaging[index].background.url} layout='fill' alt='x' />
      </div>
    </div>
  );
};

export default Packaging;
