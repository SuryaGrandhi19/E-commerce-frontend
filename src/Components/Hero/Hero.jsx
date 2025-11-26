import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero-image.jpg';
import { useNavigate } from 'react-router-dom'; 

export const Hero = () => {
  const navigate = useNavigate();

  const handleLatestCollection = () => {
    // Navigate to the NewCollection page
    navigate('/Newcollection');
  };

  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Welcome To The Shopping</h2>
            <div>
                <div className="hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt=""/>
                </div>
                <p>Collection</p>
                <p>For EveryOne</p>
            </div>
            <div className="latest-btn" onClick={handleLatestCollection} style={{ cursor: 'pointer' }}>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt=""/>
        </div>
    </div>
  )
}
