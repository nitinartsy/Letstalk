import React, { Component } from "react";
import Slider from "react-slick";
import Button from "./button";
import './carousel.css'


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="slickimg1">
                        <img src="./images/img1.png" alt="" />
                        <div className="centered"><p>LET'S MAKE YOUR LIFE HAPPIER</p>
                            <h1>Healthy Living</h1> <br /> <Button /></div>
                    </div>
                    <div className="slickimg1">
                        <img src="./images/img1.png" alt="" />
                        <div className="centered"><p>ASSESSMENT & TESTS</p>
                            <h1>SPEECH, LANGUAGE & HEARING</h1> <br /> <Button /></div>
                    </div>
                    <div className="slickimg1">
                        <img src="./images/img1.png" alt="" />
                        <div className="centered"><p>LET'S MAKE YOUR LIFE HAPPIER</p>
                            <h1>Healthy Living</h1> <br /> <Button /></div>
                    </div>
                    <div className="slickimg1">
                        <img src="./images/img1.png" alt="" />
                        <div className="centered"><p>  SPEECH, LANGUAGE & VOICE THERAPY</p>
                            <h1>FOR EVERYONE</h1> <br /> <Button /></div>
                    </div>
                </Slider>
            </div>
        );
    }
}

