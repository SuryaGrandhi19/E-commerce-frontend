import React from 'react';
import './Offers.css';
import exclusive_img from '../Assets/exclusive_image.png';
import { useNavigate } from 'react-router-dom';

export const Offers = () => {
  const navigate = useNavigate();

  const handleCheckNow = () => {
    navigate('/newsletter');
  };

  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only on Best Products</p>
        <button onClick={handleCheckNow}>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_img} alt=""/>
      </div>
    </div>
  );
};
