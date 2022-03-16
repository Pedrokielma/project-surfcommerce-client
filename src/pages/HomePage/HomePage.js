import React from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import './HomePage.css';
import { Link } from 'react-router-dom';
import MyFooter from '../../Components/Footer/Footer'


function HomePage() {
  return (
    <div>
    <Navbar></Navbar>
      <section className='first-section'>
      <img className='home-image' src="https://lushpalm.com/wp-content/uploads/2021/07/beginner-surfboards.jpg" alt="Surf boards" />
      <div className='home-paragraf'>
      <p >Vulputate quis commodo dolor, cursus. Nisl, duis enim suspendisse aenean. 
      Aliquet lectus at in nunc proin sit pharetra, tellus lorem. Nisl curabitur sed ac in. 
      Sed molestie facilisis sapien venenatis. iaculis. Leo</p>
      <button className='button-about'>  <b>Know More</b> </button>
      </div>
      </section>
      <section className='second-section'>
      <h1>explore</h1>
      <div>
      <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body colorCard">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-dark">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body colorCard">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-dark">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
      </div>
      </section>

      <MyFooter />
    </div>
  );
}

export default HomePage;
