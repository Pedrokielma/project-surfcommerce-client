import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc'
import SubmmitButton from '../../Components/SubmmitButton/SubmmitButton';

import './SignupPage.css';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
      .then((response) => {
        navigate('/login');
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
      <h1 className="title-sign"> <b>Signup</b></h1>
      <form  className="sign-in-form" onSubmit={handleSubmit}>
      <div className='login-form-div'>
      <label htmlFor="name" id="name"  >Name</label>
        <input type="text" name="name" placeholder="Write your Name" value={name} onChange={handleName} />
        <label htmlFor="email" id="email"  >Email</label>
        <input type="text" name="email" placeholder="Write your Email" value={email} onChange={handleEmail} />
        </div>
        <div className='login-form-div'>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="8-10 character password" id="password" value={password} onChange={handlePassword} />
        </div>
        <SubmmitButton  content='Sign up' />
      </form>

      
      <hr className='or-div'/>
      


      <div className='google-login'>
      <a href="http://localhost:5005/auth/google"><FcGoogle className='FcGoogle' /><span> Sign in with Google </span></a>
      </div>

      <div className='direct-signin'> <p>Already a Duck Diver?  <Link to='/login'>Log in</Link></p> </div>
      
    </div>
    </section>
    </div>
  );
}

export default SignupPage;
