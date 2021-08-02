import React, { useState, useEffect } from 'react';
import SlideControls from '../../components/SlideControls';

const Productions = ({ productions }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {}, [index]);

  const indexNext = () => {
    if (index == productions.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const indexBack = () => {
    if (index == 0) {
      setIndex(productions.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  console.log(productions);
  return (
    <div
      id='productions'
      className='snap-view bg-black flex justify-center items-center'
    >
      <SlideControls indexNext={indexNext} indexBack={indexBack} />
      <div className='absolute w-full h-screen z-0'>
        <video src={productions[index].background.url} />
      </div>
    </div>
  );
};

export default Productions;
