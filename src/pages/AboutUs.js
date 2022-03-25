import React from 'react'
import DoctorHolding from '../images/DoctorHolding.jpg';
import LaptopImage from '../images/LaptopImage.jpg';
import Logo from '../images/logo.png';
import nurse from '../images/nurse.jpg';

const AboutUsPage = () => {
  return (
      <div className="about-us-page">

          <h1 className='about-us-header'>Health First</h1>
          <h3 className="subheader">About us</h3>

          <div className="about-us-container">

              <div className="about-us-left">
                  <h3 className="who-are-we">Who are we?</h3>

                  <p className='about-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.</p>

                  <div className="center">
                      <h4 className="color-highlight"> Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.</h4>
                  </div>

                  <p className='about-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.</p>

                  <h4 className="color-highlight"> Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis.</h4>

                  <p className='about-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.</p>
              
                      <img src={Logo} className='logo'/>

              </div>

              <div className="about-us-right">
                  <img src={LaptopImage} className='laptop-image' />
                  <img src={DoctorHolding} className='doctor-image' />
                  <img src={nurse} className='nurse-image' />
                  <h4 className='slogan-tag'>Putting your health first since 2022</h4>
              </div>

          </div>
      </div>
 
  )
}

export default AboutUsPage;
