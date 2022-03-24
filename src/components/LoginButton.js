import React from 'react'
import { Link } from 'react-router-dom'

const LoginButton = () => {

  return (
    <Link to= "/login" className='login-btn'>
    <button>Login</button>
    
    </Link>
  )
}

export default LoginButton;
