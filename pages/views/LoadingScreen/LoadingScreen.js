import React from 'react';
import BallBounce from './components/BallBounce';

const LoadingScreen = () => {
  return (
    <div
      id='loading'
      className='absolute z-30 w-full h-screen bg-gray-200 flex flex-col items-center justify-center'
    >
      <BallBounce />
      <div className='font-bowl mt-6'>Cargando</div>
    </div>
  );
};

export default LoadingScreen;
