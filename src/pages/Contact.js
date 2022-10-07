import React from 'react'
import './contact.css'
import Map from '../components/elements/map'
import Footer from '../components/footer'

const Contact = () => {
  return (
    <>
<div className='contact-flex'>
<div className='m1'>
<Map/>
</div>
<div className='m2'>

    <h1>Contact us</h1>

<form action="/action_page.php">
  <label for="fname">Enter your Name:</label> <br />
  <input type="text" id="fname" name="fname" size="30"/><br/><br/>
  <label for="lname"> Enter your Contact No.</label> <br />
  <input type="tel" id="phone" name="phone" size="30" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/><br/><br/>
  <label for="lname">Enter your email</label> <br />
  <input type="email" id="email" size="30" name="email" placeholder="abcdefgh@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/> <br /> <br />
  <button>Submit</button>
</form>
<div className='iconsets-1'>
<a href="#" > <img  src="./images/icons8-facebook.svg" alt="" /> </a>
<a href="#" > <img  src="./images/icons8-google.svg" alt="" /> </a>
<a href="#" > <img  src="./images/icons8-linkedin-circled.svg" alt="" /> </a>
<a href="#" > <img  src="./images/icons8-instagram.svg" alt="" /> </a>
</div>



</div>
</div>
<Footer/>
   </>
  )
}

export default Contact