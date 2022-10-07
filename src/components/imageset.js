import React from 'react'
import './imageset.css'
import { Link } from 'react-router-dom';
import Buttoon from './button';

const Imageset = () => {
  return (
    <>
      <img className="img1" src="./images/user1.png" alt="" />
      <div className="image2" >
        <img className="image" src="./images/Frame 1.png" alt="" />
        <div className="centr">
          <h4> I am a speech therapist</h4>
          <h1>Dr. Kundan Singh </h1>
          <p>   Hello All Dear Reader/viewer's
            With a Wonderful experience of 21 years, in speech & hearing field. Our clinics are the most reputed clinics of  Delhi/ NCR.
            WE Identify, evaluate and provide Best hearing & and Speech Solution for children, adults, and Old age group with hearing disorder,
            speech and language problem. WE are having wide range of digital and analog hearing aids  to accommodate all levels of hearing loss. <br />

            Our skilled audiologist assess your hearing difficulties and the best hearing aid you got according to your need. Some with all speech and listing Problem you will
            get best therapy with prior assessment or examinations. <br />

            You will bring your confidence Back with LET's Talk Speech & Hearing clinic
          </p>
          <i className="fa fa-phone"></i> +9198115 13648 <br />
          <i className="fa fa-building"></i> B-28,mayfield garden near vani square,sec-50 Gurugram <br />
          <i className="fa fa-building"></i> 28/58 sec-15 part-2,opp. Jyoti hospital,Gurugram <br />
          <i className="fa fa-building"></i>  City square centre,basement Swastik clinic sec-35,ashok enclve opp.Kaniska towers <br />
          <i className="fa fa-building"></i>
          385, Near Mother Dairy Sector-30,
          Faridabad, Haryana 121003
          <br /><br />
          <Link to="/book" className="book">
            <Buttoon btntext="Book Now" />
          </Link>

        </div>

      </div>
      <div className='main-video'>
        <h1>WHAT DOES A SPEECH THERPAIST DO?</h1>
        <div className='video-whatdoes'>

          <video width="500" height="300" controls>
            <source src="./Videos/letsvid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='what-to-do' >

            <p>  Speech therapists do and the different ways they can help you, not just with swallowing and speaking but also with issues related to cognition, it helps people with speech and language problems to speak more clearly. Speech and language therapists help toddler, children and adults to overcome or reduce their communication disorders. Speech pathologists plan and implement prevention or rehabilitation services, including hearing aid selection and orientation, counselling, auditory training,  language rehabilitation, speech conversation and other treatment programmers. They may refer the patient to a physician or surgeon if medical treatment is found to be necessary. They provide resources and information to patients and their families, listen to the patient concerned and assess and diagnose communication problems.</p>
            <br /> <br />
          </div>
        </div>
      </div>

    </>





  )
}

export default Imageset;