import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About'
import Service from './pages/Service'
import Book from './pages/Book'
import Contact from './pages/Contact'
import Signup from './pages/Signup';
import Home from './pages/Home'
import Gallery from './pages/Gallery';
import HearingTest from './ServicePages/HearingTest';



const App = () => {
    return ( 
        <>
        <Router>
        <Navbar/>
        <Routes>
             <Route path='/' element={<Home/>} />
            <Route exact path='/home' element={<Home/>} />  
            <Route path='/about' element={<About/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/book' element={<Book/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/gallery' element={<Gallery/>} />

            <Route path='/hearingtest' element={<HearingTest/>} />
        </Routes>
        </Router>
   
     
        </>
    )
}

export default App;