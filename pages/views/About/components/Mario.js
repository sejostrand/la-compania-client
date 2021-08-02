import React from 'react';
import Image from 'next/image';

const Mario = () => {
  return (
    <div className='relative flex flex-col items-center z-20'>
      <Image src='/media/logosmario.png' width={500} height={600} />
    </div>
  );
};

export default Mario;
