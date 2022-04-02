import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

import { AuthContext } from '../../context/auth.context';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { storeToken, authenticateUser } = useContext(AuthContext);
 

  const navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, body)
      .then((response) => {
        console.log('res.data', response.data);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="backgroundLogin">
    <div className="login-block">
      <h1 className="titleIn"> <b>Login</b></h1>
      <form  className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username" id="username" placeholder="Username" >Username</label>
        <input type="text" name="username" value={username} onChange={handleUsername} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password"  id="password" value={password} onChange={handlePassword} />

        <button type="submit"> Login </button>
      </form>
    </div>
    </section>

/* <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
<div class="logo"></div>
<div class="login-block">
    <h1>Login</h1>
    <input type="text" value="" placeholder="Username" id="username" />
    <input type="password" value="" placeholder="Password" id="password" />
    <button>Submit</button>
</div> */

// // {/* <div class="logo"></div>
// // <div class="login-block">
// //     <h1>Login</h1>
// //     <input type="text" value="" placeholder="Username" id="username" />
// //     <input type="password" value="" placeholder="Password" id="password" />
// //     <button>Submit</button> */}
// </div>
  );
}

export default LoginPage;
