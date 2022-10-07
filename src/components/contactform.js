import React from 'react'
import './contactform.css'
import Buttoon from './button'
import { Link } from 'react-router-dom';

const Contactform = () => {
  return (
    <>
    
  
    <div className='containerr' >

        <div className='formcontent-1'>
        <img  src="./images/lbox2.png" alt="" />
        <div className='cnter-1'>
            
        {/* form */}

     <h1>Make an Apointment</h1>
     <p>Complete the form and we will send you a confirmation with in 24 hours</p>


        <form>
  <div className="form-group">
    <input type="Name" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Name"/>
  </div>
  <div className="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <input type="tel" class="form-control" id="exampleInputPhone" aria-describedby="Phone" placeholder="+91 12345 67890"/>
    
  </div>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
</div>


<Link to="/book" className="book">
            <Buttoon btntext="Book Now" />
          </Link>
</form>



{/* form end */}




        </div>
        </div>

 

     <img  src="./images/lbox1.png" alt=""  className='form-2' />
     </div>









    </>
  )
}

export default Contactform