import React from "react";
// import "./styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function App() {
  const RenderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <div>
        <h3> {num} </h3>
      </div>
    ));

  return (
    <div className="App">
      <Slider dots={true}>{RenderSlides()}</Slider>
    </div>
  );
}