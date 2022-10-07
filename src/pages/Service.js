import React from 'react'

import Footer from '../components/footer';
import Homeslide from '../components/Homeslide';
import Button from '../components/button';

import './service.css';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <>
      <br />
      <br />

      <Homeslide />
      <br /><br />
      <h2>	&#9135; TESTS &#9135;</h2>

      <div class="polaroids">
        <Link to="/hearingtest" className="home">
          <div class="polaroid">
            <img src="./images/hearing.png" />
            <br />
            <p>Hearing Test </p>
          </div>
        </Link>

        <div class="polaroid">
          <img src="./images/oae.png" />
          <p>OAE Test</p>
        </div>
        <div class="polaroid">
          <img src="./images/assr.png" />
          <p>ABR/BERA</p>
        </div>
        <div class="polaroid">
          <img src="./images/ecog.png" />
          <p>IMPEDANCE</p>
        </div>
        <div class="polaroid">
          <img src="./images/ecog.png" />
          <p>ECOG</p>
        </div>
        <br /><br /><br /><br /><br />
        <h2>	&#9135; SPECIAL TEST &#9135;</h2>
        <div class="polaroid">
          <img src="./images/voice.png" />
          <p>TD</p>
        </div>
        <div class="polaroid">
          <img src="./images/voice.png" />
          <p>SISI</p>
        </div>
        <div class="polaroid">
          <img src="./images/voice.png" />
          <p>ABLB</p>
        </div>
        <div class="polaroid">
          <img src="./images/voice.png" />
          <p>ETF</p>
        </div>



        <br /><br /><br /><br /><br />
        <h2>	&#9135; SPEECH & LANGUAGE PANTHOLOGY &#9135;</h2>
        <div class="polaroid">
          <img src="./images/voice.png" />
          <p>Voice Therapy</p>
        </div>
        <div class="polaroid">
          <img src="./images/th-or-lan.png" />
          <p>Language Therapy</p>
        </div>
        <div class="polaroid">
          <img src="./images/throat.png" />
          <p>STAMMERING</p>
        </div>
        <div class="polaroid">
          <img src="./images/th-or-lan.png" />
          <p>APSHSIA</p>
        </div>
        <div class="polaroid">
          <img src="./images/Dysfunction In Learning.png" />
          <p>AUTISM</p>
        </div>
        <div class="polaroid">
          <img src="./images/Dysfunction In Learning.png" />
          <p>DISABILITY IN LEARNING</p>
        </div>
        <div class="polaroid">
          <img src="./images/Dysfunction In Learning.png" />
          <p>ADHD/ADD</p>
        </div>
        <div class="polaroid">
          <img src="./images/Dysfunction In Learning.png" />
          <p>MENTAL RETARDNESS</p>
        </div>
        <br /><br /><br /><br /><br />


        <h2>	&#9135;  HEARING AID & FITTING &#9135;</h2>



        <div class="polaroid">
          <img src="https://picsum.photos/200/200?image=53" />
          <p>ANALOG HERING AIDS</p>
        </div>
        <div class="polaroid">
          <img src="https://picsum.photos/200/200?image=53" />
          <p>DIGITIAL HEARING AIDS</p>
        </div>
        <div class="polaroid">
          <img src="https://picsum.photos/200/200?image=53" />
          <p>TYPES OF HEARING AIDS</p>
        </div>
        <br /><br /><br /><br /><br />
        <h2>	&#9135; COCHLEAR IMPLANT&#9135;</h2>
        <div class="polaroid">
          <img src="https://picsum.photos/200/200?image=53" />
          <p>COCHLEAR IMPLANTATION</p>
        </div>
        <div class="polaroid">
          <img src="https://picsum.photos/200/200?image=53" />
          <p>PRE AND POST-OPERATIVE ASSESSMENTS</p>
        </div>


      </div>


      <Footer />



    </>
  )
}

export default Service