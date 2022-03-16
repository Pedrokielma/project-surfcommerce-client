import React from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import './HomePage.css';

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
      
      </section>
    </div>
  );
}

export default HomePage;
