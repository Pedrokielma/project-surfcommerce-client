import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import GreenButton from "../../Components/GreenButton/GreenButton";
import InputForm from "../../Components/InputForm/InputForm";

import "./SignupPage.scss";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

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
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <nav className="nav-sign">
        <Link to="/">
          {" "}
          DUCK <br /> DIVE
        </Link>
      </nav>
      <section className="background-sign">
        <div className="sign-block">
          <h1 className="title-sign">
            {" "}
            <b>Signup</b>
          </h1>
          <form className="sign-in-form" onSubmit={handleSubmit}>
            <InputForm
              name="name"
              title="Name"
              type="text"
              placeholder="Write your Name"
              handleSubmit={handleName}
            />

            <InputForm
              name="email"
              title="Email"
              type="email"
              placeholder="Write your Email"
              handleSubmit={handleEmail}
            />

            <InputForm
              name="password"
              title="Password"
              type="password"
              placeholder="8-10 character password"
              handleSubmit={handlePassword}
            />

            <GreenButton className='submit-button' content="Sign up" />
          </form>

          <hr className="or-div" />

          <div className="google-login">
            <a href="http://localhost:5005/auth/google">
              <FcGoogle className="FcGoogle" />
              <span> Sign in with Google </span>
            </a>
          </div>

          <div className="direct-signin">
            {" "}
            <p>
              Already a Duck Diver? <Link to="/login">Log in</Link>
            </p>{" "}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignupPage;
