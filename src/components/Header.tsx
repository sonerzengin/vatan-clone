import React from 'react';
const header = require('../assets/header.jpg');

const Header: React.FC = () => {
  return (
    <div className="container mx-auto">
      <img src={header} alt="" />
    </div>
  );
};

export default Header;
