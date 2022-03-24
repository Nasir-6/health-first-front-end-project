import React from 'react'
import DoctorHolding from '../images/DoctorHolding.jpg';
import LaptopImage from '../images/LaptopImage.jpg';

const AboutUsPage = () => {
  return (
      <div className="about-us-page">

          <h1 className='about-us-header'>Health First</h1>
          <h3 className="subheader">About us</h3>

          <div className="about-us-container">

              <div className="about-us-left">
                  <h3 className="who-are-we">Who are we?</h3>

                  <p className='about-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.</p>
              </div>

              <div className="about-us-right">
              <img src={LaptopImage} className='laptop-image'/>
              <img src={DoctorHolding} className='doctor-image'/>
              </div>

          </div>
      </div>
 
  )
}

export default AboutUsPage;
