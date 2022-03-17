import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
      .then((response) => {
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };
  return (
   
     <section className="backgroundLogin">
    <div className="login-block">
      <h1 className="titleIn"> <b>Signup</b></h1>
      <form  className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username" id="username" placeholder="Username" >Username</label>
        <input type="text" name="username" value={username} onChange={handleUsername} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password"  id="password" value={password} onChange={handlePassword} />

        <button type="submit"> Login</button>
      </form>
    </div>
    </section>
  );
}

export default SignupPage;
