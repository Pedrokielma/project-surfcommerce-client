import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc'
import SubmmitButton from '../../Components/SubmmitButton/SubmmitButton';

import './LoginPage.css';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { storeToken, authenticateUser } = useContext(AuthContext);
 

  const navigate = useNavigate();

  
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
      <div className='login-form-div'>
        <label htmlFor="email" id="email"  >Email</label>
        <input type="text" name="email" placeholder="Write your Email" value={email} onChange={handleEmail} />
        </div>
        <div className='login-form-div'>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="8-10 character password" id="password" value={password} onChange={handlePassword} />
        </div>
        <SubmmitButton  content='Login' />
      </form>

      
      <hr className='or-div'/>
      


      <div className='google-login'>
      <a href="http://localhost:5005/auth/google"><FcGoogle className='FcGoogle' /><span> Sign in with Google </span></a>
      </div>

      <div className='direct-signin'> <p>New to Duck Dive?  <Link to='/signup'>Sign up</Link></p> </div>
      
    </div>
    </section>
    </div>

  );
}

export default LoginPage;
