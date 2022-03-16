import React from 'react'
import './Footer.css';
import { FaInstagram, FaTwitter, FaFacebookSquare, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
    <ul class="list-style">
        <li><a href="#"> <FaTwitter />Twitter</a></li>
        <li><a href="#"> <FaFacebookSquare />Facebook</a></li>
        <li><a href="#"> <FaInstagram />Instagram</a></li>
        <li><a href="#"> <FaGithub />Git Hub</a></li>
      </ul>
  </footer>
  )
}

export default Footer