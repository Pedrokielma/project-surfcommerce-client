import React, { useContext, useEffect, useState } from 'react'
// import { Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import './Navbar.css';
import { FaSearch } from "react-icons/fa";
import { GiSurfBoard } from "react-icons/gi";
import axios from 'axios';



function Navbar() {
  const [weatherData, setWeatherData] = useState(null)
  const [lat, setLat] = useState("38")
  const [lon, setLon] = useState("-9")

  const { loggedIn, user, logoutUser } = useContext(AuthContext);

  const fetchWeather = async () => {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${"e17f58f9141ee266cf9ec751d494d5ba"}`)
    setWeatherData(`${Math.ceil(response.data.main.temp - 273.15)}oC`)
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (


    <nav className={'Navbar'}>


<Link className="link"to="/"> <GiSurfBoard className="logo" /></Link>
      <Link className="link"to="/"> Home</Link>
      <Link className="link" to="/items"> <FaSearch /> SurfItems</Link>
      <p className="link">{weatherData}</p>


      {loggedIn && (
        <>
      
          <button className="log" onClick={logoutUser}>Logout</button>
          <Link className="log" to="/profile"> Profile</Link>
          {/* <h4> hello, {user.username}</h4> */}
        </>
      )}

      {!loggedIn && (
        <>
          <Link className="log" to="/signup"> Signup</Link>
          <Link className="log" to="/login"> Login</Link>
        </>
      )}
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
