import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import '../assets/styles/login.scss';
import AuthContext from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
const [username,setUserName]=useState("");
const [password,setPassword]=useState("");

const {login}=useContext(AuthContext);
const navigate=useNavigate();

const handleLogin=async(e)=>{
e.preventDefault();
try{
  await login(username,password);
  navigate("/");
}
catch(error){
  alert("Failed!");
  //eğer giriş başarılı olmazsa formu resetler 
  setUserName("");
  setPassword("");
}
}
  return (
    <form onSubmit={handleLogin}>
      <h3>Login</h3>
      <input value={username} onChange={e=>setUserName(e.target.value)} type="text" placeholder="E-Posta" />

      <div className="password-container">
        <input value={password} onChange={e=>setPassword(e.target.value)} className="password" type={showPassword ? "text" : "password"} placeholder="Password" />
        <i className="eye-icon" style={{ cursor: "pointer" }} onMouseDown={() => setShowPassword(true)} onMouseUp={() => setShowPassword(false)} onMouseLeave={() => setShowPassword(false)} >{showPassword ? <FaEye /> : <FaEyeSlash />}</i>
      </div>

      <button disabled={username==="" || password===""} type="submit">Login</button>
      <Link to="/">Giriş yapmadan devam et</Link>

    </form>
  );
}

export default Login;

// import React from 'react'
// import { FaEyeSlash } from "react-icons/fa";
// import '../assets/styles/login.scss'


// const Login = () => {
//   return (
//     <form>
//         <h3>Login</h3>
//         <input type="text" placeholder='E-Posta' />
//         <input className='password' type="password" placeholder='Password' />
//         <i className='eye-icon' style={{cursor:"pointer"}}><FaEyeSlash /></i>
//         <button type='submit'>Login</button>
//     </form>
//   )
// }

// export default Login

