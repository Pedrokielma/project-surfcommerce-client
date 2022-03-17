import React, { useContext } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './HomePage.css';
import { Link } from 'react-router-dom';
import MyFooter from '../../Components/Footer/Footer'
import { AuthContext } from '../../context/auth.context';
import { FcSearch } from 'react-icons/fc';
import { MdSell } from "react-icons/md"


function HomePage() {
  const { loggedIn } = useContext(AuthContext);

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
      <div className="explore"><h1>explore</h1></div>
      <div>
      <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body colorCard">
        <h5 className="card-title"><FcSearch className="reactIcon" /></h5>
        <p className="card-text">Search for Surf Items of your needs</p>
        <Link to="/items" className="btn btn-dark">Serach Items</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body colorCard">
        <h5 className="card-title"><MdSell className="reactIcon" /></h5>
        <p className="card-text">Sell your Itens</p>
        {loggedIn && (
          <Link className="btn btn-dark" to="/profile"> create a Post </Link>
      )}

      {!loggedIn && (
          <Link className="btn btn-dark" to="/login"> create a Post</Link>
      )} 
        {/* <a href="/profile" className="btn btn-dark">post Item</a> */}
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
