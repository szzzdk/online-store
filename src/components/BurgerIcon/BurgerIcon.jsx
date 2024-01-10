import React from 'react';
import './BurgerIcon.css'

const BurgerIcon = ({ onClick, isOpen }) => {
  return (
    <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}

export default BurgerIcon;