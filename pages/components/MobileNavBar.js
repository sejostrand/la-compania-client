import React from 'react';

const MobileNavBar = () => {
  return (
    <>
      <div className='fixed top-8 right-8 z-20'>
        <div
          className='
            flex flex-col flex-nowrap
            items-end
            cursor-pointer
          '
        >
          <div className='bg-white w-8 h-1 my-0.5 shadow'></div>
          <div className='bg-white w-4 h-1 my-0.5 shadow'></div>
          <div className='bg-white w-6 h-1 my-0.5 shadow'></div>
        </div>
      </div>

      <div className='transform translate-x-96 w-96 pr-6 flex flex-col justify-center items-end fixed top-0 right-0 h-screen z-10 bg-gray-200'>
        <a className='my-2'>Nosotros</a>
        <a className='my-2'>Marcas</a>
        <a className='my-2'>Trabajo</a>
        <a className='my-2'>Contact</a>
        <a className='my-2'>Link</a>
      </div>
    </>
  );
};

export default MobileNavBar;
