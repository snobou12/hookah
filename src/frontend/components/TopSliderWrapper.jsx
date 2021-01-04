import React from 'react';

import { TableModal } from './';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import sliderImg1 from '../../assets/image/top-slider-image1.jpg';
import sliderImg2 from '../../assets/image/top-slider-image2.jpg';
import sliderImg3 from '../../assets/image/top-slider-image3.jpg';
import sliderImg4 from '../../assets/image/top-slider-image4.jpg';
import '../css/TopSliderWrapper.css';
function TopSliderWrapper() {
  return (
    <div className="topSlider-wrapper">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 " src={sliderImg1} alt="" />
          <Carousel.Caption>
            <div className="tableModals">
              <div className="tableModal">
                <TableModal />
              </div>
              <div className="tableModal">{/* <EventModal /> */}</div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderImg2} alt="" />
          <Carousel.Caption>
            <div className="tableModals">
              <div className="tableModal">
                <TableModal />
              </div>
              <div className="tableModal">{/* <EventModal /> */}</div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderImg3} alt="" />
          <Carousel.Caption>
            <div className="tableModals">
              <div className="tableModal">
                <TableModal />
              </div>
              <div className="tableModal">{/* <EventModal /> */}</div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default TopSliderWrapper;
