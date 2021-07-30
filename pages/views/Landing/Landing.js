import Image from 'next/image';
import { FaHandPointDown } from 'react-icons/fa';

//import components
import HeroCover from './components/HeroCover';

const Landing = () => {
  return (
    <div className='snap-view flex flex-col items-center bg-gray-100'>
      <div className='mt-10'>
        <Image src={'/media/header.png'} alt='logo' height={80} width={300} />
      </div>
      <HeroCover />
      <div className='absolute bottom-6 right-24 text-5xl cursor-pointer animate-bounce'>
        <FaHandPointDown />
      </div>
    </div>
  );
};

export default Landing;
