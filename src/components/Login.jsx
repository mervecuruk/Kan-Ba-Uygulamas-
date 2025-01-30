import React from 'react'
import { FaEyeSlash,FaEye } from "react-icons/fa";
import '../assets/styles/login.scss'


const Login = () => {
  return (
    <form>
        <h3>Login</h3>
        <input type="text" placeholder='E-Posta' />
        <input className='password' type="password" placeholder='Password' />
        <i className='eye-icon' style={{cursor:"pointer"}}><FaEyeSlash /></i>
        <button type='submit'>Login</button>
    </form>
  )
}

export default Login