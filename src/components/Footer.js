import React from 'react'
import Logo from '../Assets/Logo.svg';
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo} alt='logo' />
            </div>
            <div className='footer-icons'>
                <BsTwitter />
                <SiLinkedin />
                <BsYoutube />
                <FaFacebook />
            </div>    
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>  
                <span>Carrers</span>  
                <span>Tetimonials</span>
                <span>Work</span>   
            </div>
            <div className='footer-section-columns'>
                <span>244-5333-7783</span>
                <span>hello@foodie.com</span>
                <span>press@foodie.com</span>
                <span>contact@foodie.com</span>                   
            </div>
            <div className='footer-section-columns'>
                <span>Terms of Service</span>
                <span>Privacy Policy</span>
            </div>
        </div>               
    </div>
  )
}

export default Footer