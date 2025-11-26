import React from 'react'
import './NewsLetter.css';
export const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Shop More And Get More Discounts & Updates</p>
        <div>
            <input type='email' placeholder='Please Give EmailId'/>
            <button>Shop More</button>
        </div>
    </div>
  )
}
