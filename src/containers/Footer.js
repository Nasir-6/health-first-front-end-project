import React from 'react'
import logoInverse from '../images/logoInverse.png'

const Footer = () => {
  return (
    <body className='footer'>
    <p>© HealthFirst copyright</p>
    <img src = {logoInverse} className='logoInverse'></img>
    </body>
  )
}

export default Footer;
