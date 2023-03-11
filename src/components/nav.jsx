import React from 'react';

const Nav = () => {
  return (
    <div className='w-full h-12 hidden md:flex items-center gap-8 justify-center text-gray-200 pt-5 md:text-lg lg:absolute lg:py-12 md:font-medium z-50'>
      <p className='nav__links'>Home</p>
      <p className='nav__links'>About</p>
      <p className='nav__links'>Projects</p>
    </div>
  );
};

export default Nav;
