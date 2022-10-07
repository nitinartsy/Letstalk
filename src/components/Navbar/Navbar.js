import React from 'react'
import Buttoon from '../button';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

  return (
    <>
      <div class="topnav" id="myTopnav">
        <a href="#home" class="logo" >
          <img src="./images/LOGO.png" alt="" />
        </a>
        <div class="links">
          <a class="icon">

            <ul id='menu'>
              <li><a href='#'> <i class="fa fa-bars"></i></a>
                <ul>
                  <li><Link to="/home" className="home">
                    <a href="#news">Home</a>
                  </Link> </li>
                  <li><Link to="/about" className="home">
                    <a href="#news">About</a>
                  </Link> </li>
                  <li> <Link to="/service" className="home">
                    <a href="#news">Services</a>
                  </Link></li>
                  <li> <Link to="/gallery" className="home">
            <a href="#news">Gallery</a>
          </Link></li>
<li>    <Link to="/book" className="home">
            <a href="#news">Book</a>
          </Link></li>
                  <li>
                  <Link to="/contact" className="home">
            <a href="#news">Contact</a>
          </Link>
                  </li>
                  <li>
                  <Link to="/signup" className="home">
            <a href="#news">Signup</a>
          </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </a>
          <Link to="/home" className="home">
            <a href="#news">Home</a>
          </Link>
          <Link to="/about" className="home">
            <a href="#news">About</a>
          </Link>
          <Link to="/service" className="home">
            <a href="#news">Services</a>
          </Link>
          <Link to="/gallery" className="home">
            <a href="#news">Gallery</a>
          </Link>
          <Link to="/book" className="home">
            <a href="#news">Book</a>
          </Link>
          <Link to="/contact" className="home">
            <a href="#news">Contact us</a>
          </Link>
          <Link to="/book" className="book">
            <Buttoon btntext="Sign Up" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar





