import React from 'react';

import { Carousel } from 'react-bootstrap';
import sliderImg1 from '../../assets/image/top-slider-image1.jpg';
import sliderImg2 from '../../assets/image/top-slider-image2.jpg';
import sliderImg3 from '../../assets/image/top-slider-image3.jpg';

import '../css/GalerySliderWrapper.css';
function GalerySliderWrapper() {
  return (
    <div className="topSlider-wrapper  ">
      <div className="">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 " src={sliderImg1} alt="" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderImg2} alt="" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderImg3} alt="" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default GalerySliderWrapper;
