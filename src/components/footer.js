import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>

<footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo"> Let's Talk Speech & Hearing Clinic</h1>
        
    <h2>Contact Us</h2>
    
    <address>
    <i className="fa fa-phone"></i> 49332091 <br/> <br />
    <i className="fa fa-building"></i>  B-28,mayfield garden near vani square,sec-50 Gurugram <br/> <br />
    <i className="fa fa-building"></i>  28/58 sec-15 part-2,opp. Jyoti hospital,Gurugram <br/> <br />
    <i className="fa fa-building"></i>  City square centre,basement Swastik clinic sec-35,ashok enclve opp.Kaniska towers<br/>

    </address>
  </div>

  <ul className="footer__nav">
    <li className="nav__item">

      <ul className="nav__ul">
        <h4>Services</h4>
        <li>
          <a href="#"> HEARINEG TEST </a>
        </li>
        <li>
          <a href="#">OAE TEST</a>
        </li>
        <li>
          <a href="#">ASSR TEST</a>
        </li>
        <li>
          <a href="#">ECOG TEST</a>
        </li>
        <li>
          <a href="#">SPEECH & LANGUAGE PANTHOLOGY</a>
        </li>
        <li>
          <a href="#"> HEARING AID & FITTING</a>
        </li>
        <li>
          <a href="#">ELECTROPHYSIOLOGY HEARING</a>
        </li>
        <li>
          <a href="#">COCHLEAR IMPLANT</a>
        </li>




       
      </ul>
    </li>
    
  </ul>
  <div className="footer__addr">
    <h4 > About</h4>
    <p style={{color:'#999'}}>
    Hello All Dear Reader/viewer's
With a Wonderful experience of 21 years, in speech & hearing field. Our clinics are the most reputed clinics of  Delhi/ NCR.
WE Identify, evaluate and provide Best hearing & and Speech Solution for children, adults, and Old age group with hearing disorder,
speech and language problem. WE are having wide range of digital and analog hearing aids  to accommodate all levels of hearing loss.

Our skilled audiologist assess your hearing difficulties and the best hearing aid you got according to your need. Some with all speech and listing Problem you will
get best therapy with prior assessment or examinations.
  
You will bring your confidence Back with LET's Talk Speech & Hearing clinic
    </p>
    
  </div>
  
  <div className="legal">
    <p>&copy; 2022 .Let's Talk Speech & Hearing Clinic.</p>
    
    <div className="legal__links">
    <div className='home-img'>
      <p>Get Connected With</p>
<a href="#" > <img  src="./images/icons8-facebook.svg" alt="" /> </a>
<a href="#" > <img  src="./images/icons8-google.svg" alt="" /> </a>
<a href="#" > <img  src="./images/icons8-linkedin-circled.svg" alt="" /> </a>
<a href="#" > <img  src="./images/icons8-instagram.svg" alt="" /> </a>
</div>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer;