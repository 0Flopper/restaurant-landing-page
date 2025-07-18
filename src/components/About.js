import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt='About Background' />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="About Background food" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>Food Is An Important Part Of A Balanced Diet</h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </p>
            <p className='primary-text'>
                Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam. 
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'>
                    <BsFillPlayCircleFill />
                    Watch Video
                </button>
            </div>
        </div>
    </div>  
  )
}

export default About