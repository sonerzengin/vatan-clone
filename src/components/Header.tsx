import React from 'react';
const header = require('../assets/header.jpg');

const Header: React.FC = () => {
  return (
    <div className='bg-[#1564c0]'>
      <div className="flex justify-center">
      <img src={header} alt="" />
    </div>
    </div>
  );
};

export default Header;
