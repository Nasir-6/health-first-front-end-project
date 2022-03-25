import React from 'react'
import { Link } from 'react-router-dom'

const SignUpButton = () => {

  return (
    <Link to= "/signup" className='signup-btn'>
    <button>SignUp</button>
    
    </Link>
  )
}

export default SignUpButton;
