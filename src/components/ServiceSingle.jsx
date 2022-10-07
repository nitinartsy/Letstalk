import React from 'react'
import Footer from './footer'
import './ServiceSingle.css'
import Buttoon from './button';
import { Link } from 'react-router-dom';

function ServiceSingle (props) {
    return (
        <>
            <div className='service-container'>
                <img src={props.ServiceImg} />
                <div className='service-text'>
                   <h1> {props.ServiceName}</h1>
                   <hr />
                    <p>
                  {props.ServiceText}
                    </p>

       <Link to="/book" className="book">
            <Buttoon btntext="Book Now" />
          </Link>

                </div>
            </div>
            <br /><br />
            <br />

            <Footer/>
        </>
    )
}

export default ServiceSingle