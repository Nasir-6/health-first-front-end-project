import React from 'react'
import logoInverse from '../images/logoInverse.png'

const Footer = () => {
  return (
    <body className='footer'>
    <p>Copyright © 2021 HealthFirst, All rights reserved.</p>
    <img src = {logoInverse} className='logoInverse'></img>
    </body>
  )
}

export default Footer;
