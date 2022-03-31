import React, { useContext, useState } from 'react'
// import { Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import './Navbar.css';
import { FaSearch } from "react-icons/fa";
import { GiSurfBoard } from "react-icons/gi";
import axios from 'axios';
import image from '../../images/logoduckdive.png'




function Navbar() {
  // const [weatherData, setWeatherData] = useState(null)
  // const [lat, setLat] = useState("38")
  // const [lon, setLon] = useState("-9")

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const { loggedIn, user, logoutUser } = useContext(AuthContext);

  // const fetchWeather = async () => {
  //   const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
  //   setWeatherData(`${Math.ceil(response.data.main.temp - 273.15)}oC`)
  // };

  // useEffect(() => {
  //   fetchWeather();
  // }, []);

  
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (


    <nav className='nav'>
<Link className="logo-link"to="/"> <img src={image} className='logo' alt="duckdive" /></Link>

 
      <ul className={active}>
      <li className="nav__item">
      <Link className="link home-link"to="/"> Home</Link>
      </li>
      <li className="nav__item">
      <Link className="nav__link link" to="/items">Store</Link>
      </li>

      {loggedIn && (
        <>
      
          <li className="nav__item">
          <Link className="sign nav__link link" to="/profile"> Profile</Link>
          </li>
          <li className="nav__item">
          <button className="sign button nav__link link" onClick={logoutUser}>Logout</button>
          </li>
         
        </>
      )}

      {!loggedIn && (
        <>
        <li className="nav__item">
          <Link className="sign nav__link link" to="/signup"> Signup</Link>
          </li>
          
          <li className="nav__item">
          <Link className="sign nav__link link" to="/login"> Login</Link>
          </li>
        </>
      )}
      </ul>


    <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>




  )
}

export default Navbar


{/* <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar> */}
