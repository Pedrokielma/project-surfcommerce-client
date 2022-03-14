import React from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom"

function ProfileNav() {
  return (
    <div>
    <Navbar />
    <nav className={"Navbar"}>
      <Link to="/profile"> Create Item</Link>
      <Link to="/profile/myAdds">My ads</Link>
      <Link to="/profile/Favorites"> Favorites</Link>
    </nav>

  </div>
  )
}

export default ProfileNav