import React, { useContext, useEffect, useState } from 'react'
import Logo from '../assets/img/logo.jpg'
import '../assets/styles/navi.scss'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import axios from 'axios'


const Navi = () => {

    const {logout, isAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState("");

    const handleLogin = () => {
        navigate("/login");
    }

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    const getCurrentUser = async () => {
        const url = "https://api.escuelajs.co/api/v1/auth/profile";
        const response = await axios.get(url, {
            headers: {
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken")).access_token}`
            }
        })

        const user = response.data;
        setCurrentUser(user);
    }

    useEffect(() => {
        if (isAuthenticated) {
            getCurrentUser();
        }
    }, [currentUser])

    return (
        <>
            <nav>
                <div className="brand">
                    <img  src={Logo} alt="Logo" />
                    <Link className='project-name' to="/donors">
                    <h3>Blood Donation</h3>

                    </Link>
                </div>
                {
                        isAuthenticated &&
                        <ul className="menu">
                   
                        <li>
                            <NavLink to="/donors" style={({ isActive }) => ({ color: isActive ? "#b10404" : "#272205" })} >Bağışçılar</NavLink>
                        </li>
                        <li>
                            <NavLink to="/add-donor" style={({ isActive }) => ({ color: isActive ? "#b10404" : "#272205" })} >Bağışçı Ekle</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sss" style={({ isActive }) => ({ color: isActive ? "#b10404" : "#272205" })} >SSS</NavLink>
                        </li>
    
                    </ul>
                    }
                    {
                        !isAuthenticated &&
                        <ul className="menu">
                   
                        <li>
                           <NavLink to="/donors" style={({ isActive }) => ({ color: isActive ? "#b10404" : "#272205" })} >Bağışçılar</NavLink>
                       </li>
                       {/*
                       <li>
                           <NavLink to="/add-donor" style={({ isActive }) => ({ color: isActive ? "#b10404" : "#272205" })} >Bağışçı Ekle</NavLink>
                       </li> */}
                       <li>
                           <NavLink to="/sss" style={({ isActive }) => ({ color: isActive ? "#b10404" : "#272205" })} >SSS</NavLink>
                       </li>
   
                   </ul>
   
                    }
              
                <div className="login">
                    {
                        //!burası gözükmüyor
                        currentUser &&
                        <div className="user">
                            <img src={currentUser.avatar} alt="profilePhoto" />
                            <span>{currentUser.name} - {currentUser.role}</span>
                        </div>
                    }

                    <NavLink to="/login">

                        <button onClick={isAuthenticated ? handleLogout : handleLogin} className='bn3637 bn38'>{isAuthenticated ? "Logout" : "Login"}</button>
                    </NavLink>
                    {
                        !isAuthenticated &&
                        <NavLink to="/register">
                            <button className='bn3637 bn38'>Register</button>
                        </NavLink>
                    }

                </div>
            </nav>
        </>
    )
}

export default Navi