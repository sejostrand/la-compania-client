import React from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

const SlideControls = (props) => {
  return (
    <div className='absolute flex flex-row flex-nowrap bottom-32 text-white text-5xl z-20'>
      <button className='rounded-full filter bg-gray-900 bg-opacity-80 mr-6'>
        <FiArrowLeftCircle onClick={() => props.indexBack()} />
      </button>
      <button className='rounded-full filter bg-gray-900 bg-opacity-80 ml-6'>
        <FiArrowRightCircle onClick={() => props.indexNext()} />
      </button>
    </div>
  );
};

export default SlideControls;
