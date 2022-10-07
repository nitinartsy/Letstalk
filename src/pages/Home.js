import React from 'react';
import Imageset from '../components/imageset';
import Footer from '../components/footer';
import './Home.css'
import Contactform from '../components/contactform';
import CarouselFadeExample from '../components/Homeslide';


const Home = () => {
    return (
        <> 
  <CarouselFadeExample/>
     <Imageset/>
     <Contactform/>
     <Footer/>
       </>


    );
};

export default Home;