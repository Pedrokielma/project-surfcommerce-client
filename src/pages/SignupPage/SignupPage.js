// import React, { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './SignupPage.css';
// import { FcGoogle } from 'react-icons/fc'
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignupPage.css';
import GoogleLogin from 'react-google-login';
import { FcGoogle } from 'react-icons/fc'

import { AuthContext } from '../../context/auth.context';



function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

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
    {/* <div className="login-block">
      <h1 className="titleIn"> <b>Signup</b></h1>
      <form  className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email" id="email" placeholder="Email" >Email</label>
        <input type="text" name="email" value={email} onChange={handleEmail} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password"  id="password" value={password} onChange={handlePassword} />

        <button type="submit"> Sign up</button>
      </form>
    </div> */}

    <nav className='nav-sign'>
      <Link to='/'> DUCK <br /> DIVE</Link>
    </nav>
    <section className="background-sign">
    <div className="sign-block">
      <h1 className="title-sign"> <b>Signup</b></h1>
      <form  className="sign-form" onSubmit={handleSubmit}>
      <div className='login-form-div'>
        <label htmlFor="email" id="email"  >Email</label>
        <input type="text" name="email" placeholder="Write your Email" value={email} onChange={handleEmail} />
        </div>
        <div className='login-form-div'>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="8-10 character password" id="password" value={password} onChange={handlePassword} />
        </div>
        <button type="submit"> Sign up </button>
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
