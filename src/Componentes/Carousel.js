import React from 'react';
import { Carousel } from 'react-bootstrap';

import Slide1 from './../Assets/Image/slide/un-paso-del-mar-rede.jpg';
import Slide2 from './../Assets/Image/slide/un-paso-del-mar-acomodacao.jpg';
import Slide3 from './../Assets/Image/slide/un-paso-del-mar-piscina.jpg';

const Home = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Slide2} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Slide3} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
