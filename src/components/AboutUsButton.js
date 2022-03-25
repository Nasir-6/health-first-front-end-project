import React from 'react'
import { Link } from 'react-router-dom'

const AboutUsButton = () => {

  return (
    <Link to= "/aboutus" className='aboutus-btn'>
    <button>About Us</button>
    
    </Link>
  )
}

export default AboutUsButton;
