import React from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom"
import { Nav } from 'react-bootstrap';
import './ProfileNav.css';

function ProfileNav() {
  return (
    <div>
    <Navbar />
     <nav className="profile-nav">
      <Link className="profile-link" to="/profile"> Create Item</Link>
      <Link className="profile-link" to="/profile/myAdds">My ads</Link>
      <Link className="profile-link" to="/profile/Favorites"> Favorites</Link>
    </nav>  

{/* <nav className="profile-link">
<Link className="profile-link" to="/profile"> Create Item</Link>
      <Link className="profile-link" to="/profile/myAdds">My ads</Link>
      <Link className="profile-link" to="/profile/Favorites"> Favorites</Link> 

     <Link className="link"to="/"> <GiSurfBoard className="logo" /></Link>
      <Link className="link"to="/"> Home</Link>
      <Link className="link" to="/items"> <FaSearch /> SurfItems</Link> 
    
    </nav> */}
  </div>
  )
}

export default ProfileNav