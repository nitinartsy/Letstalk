import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/img1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Healthy Living</h1>
          <p>LET'S MAKE YOUR LIFE HAPPIER.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/img1 2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
       <h1>SPEECH, LANGUAGE & HEARING</h1>
          <p>ASSESSMENT & TESTS.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/img1.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1>Healthy Living</h1>
          <p>LET'S MAKE YOUR LIFE HAPPIER.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/img1 2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
       <h1>SPEECH, LANGUAGE & HEARING</h1>
          <p>ASSESSMENT & TESTS.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;