import React, { useEffect, useState } from 'react';

const SideBar = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    if (isOpen) {
      document
        .getElementById('sidebar')
        .classList.replace('translate-x-0', '-translate-x-96');
    } else {
      document
        .getElementById('sidebar')
        .classList.replace('-translate-x-96', 'translate-x-0');
    }
    setIsOpen(!isOpen);
  };

  return (
    <div
      id='sidebar'
      className='w-96 h-screen bg-white shadow-2xl transform translate-x-0 transition-transform ease-in-out z-30 absolute left-0'
    >
      <button
        onClick={handleToggle}
        className='text-black p-2 absolute -right-20'
      >
        Click me
      </button>
    </div>
  );
};

export default SideBar;
