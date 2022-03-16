import React, { useContext } from 'react'
// import { Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import './Navbar.css';
import { FaHome } from "react-icons/fa";



function Navbar() {
const { loggedIn, user, logoutUser } = useContext(AuthContext);

  return (


    <nav className={'Navbar'}>


<Link className="link"to="/"><FaHome /> Home</Link>
      <Link className="link"to="/">Home</Link>
      <Link className="link" to="/items"> SurfItems</Link>
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
