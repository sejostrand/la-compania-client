import React from 'react';
import Image from 'next/image';

const Tere = () => {
  return (
    <div className='relative flex flex-col items-center'>
      <Image src='/media/logostere.png' width={500} height={600} alt='tere' />
    </div>
  );
};

export default Tere;
