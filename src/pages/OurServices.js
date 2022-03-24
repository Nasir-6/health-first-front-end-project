import React from 'react'
import consultation from '../images/consultation.jpg';
import referral from '../images/referral.jpg';
import vaccination from '../images/vaccination.jpg';

const OurServices = () => {
  return (
    <div className="our-services-page">

    <h1 className='our-services-header'>Health First</h1>
    <h3 className="subheader">Services we offer</h3>

    <div className="our-services-container">

        <div className="our-services-left">
        <img src={consultation} className='service-image' />
            <h3 className="services">Consultations</h3>
            <p className='about-services'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.</p>

        </div>

        <div className="our-services-center">
        <img src={vaccination} className='service-image' />
            <h3 className="services">Vaccinations</h3>
            <p className='about-services'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.</p>


        </div>

        <div className="our-services-right">
        <img src={referral} className='service-image' />
            <h3 className='services'>Referrals</h3>
            <p className='about-services'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.</p>

        </div>

    </div>
</div>

  )
}

export default OurServices;
