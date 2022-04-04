import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';
import GoogleLogin from 'react-google-login';
import { FcGoogle } from 'react-icons/fc'

import { AuthContext } from '../../context/auth.context';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { storeToken, authenticateUser } = useContext(AuthContext);
 

  const navigate = useNavigate();

  //google auth
  const handleFailure = (result) => {
    alert(result);
  }
  const handleLogin = (googleData) =>{
    console.log(googleData)
}
//
  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, body)
      .then((response) => {
        console.log('res.data', response.data.authToken);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
    <nav className='nav-sign'>
      <Link to='/'> DUCK <br /> DIVE</Link>
    </nav>
    <section className="background-sign">
    <div className="sign-block">
      <h1 className="title-sign"> <b>Login</b></h1>
      <form  className="sign-form" onSubmit={handleSubmit}>
        <label htmlFor="email" id="email" placeholder="Email" >Email</label>
        <input type="text" name="email" value={email} onChange={handleEmail} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password"  id="password" value={password} onChange={handlePassword} />

        <button type="submit"> Login </button>
      </form>


      <div className='google-login'>
      <a href="http://localhost:5005/auth/google"><FcGoogle className='FcGoogle' /><span> Sign in with Google </span></a>
      </div>
      
    </div>
    </section>
    </div>

  );
}

export default LoginPage;
