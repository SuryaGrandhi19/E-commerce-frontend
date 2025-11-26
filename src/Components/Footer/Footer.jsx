import React from 'react'
import'./Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram from '../Assets/instagram_icon.png';
import pintrest from '../Assets/pintester_icon.png';
import whatsapp from '../Assets/whatsapp_icon.png';
export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt=""/>
            <p>CARTOHUB</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Brands</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons">
                <img src={whatsapp} alt=""/>
            </div>
             <div className="footer-icons">
                <img src={instagram} alt=""/>
            </div>
             <div className="footer-icons">
                <img src={pintrest} alt=""/>
            </div>
        </div>
        <div className="footer-right">
            <hr/>
            <p>Copyright @ 2026 - All Rights Are Reserved</p>
        </div>
    </div>
  )
}
