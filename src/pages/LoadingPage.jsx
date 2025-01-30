import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../assets/styles/app.css'

const LoadingPage = () => {

  const navigate = useNavigate();

    setTimeout(() => {
        navigate("/")
    }, 3000);

    return (
        <div className='loading-page'>
            <div className='loader'></div>
        </div>
    )
}

export default LoadingPage