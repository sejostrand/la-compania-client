import React from 'react';

const BallBounce = () => {
  return (
    <div className='flex flex-col items-center justify-end h-20'>
      <div className='ball z-20 bg-red'></div>
      <div className='ball-shadow filter'></div>
    </div>
  );
};

export default BallBounce;
