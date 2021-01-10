import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import menuSectionPng1 from '../../assets/image/menuSectionPng1.jpg';
import menuSectionPng2 from '../../assets/image/menuSectionPng2.jpg';

import '../css/MenuSection.css';

// import Gallery from 'react-photo-gallery';

function MenuSection() {
  return (
    <div className="menu-section-wrapper">
      <Container fluid>
        <Row>
          <Col>
            <h2 className="textTopAbout text-center mt-5 ">Меню</h2>
            <hr className="short " />
          </Col>
        </Row>

        <Row className="firstRows pt-5 ">
          <Col sm={6} className="imgMenuSection1">
            <Image
              style={{ borderRadius: '20px' }}
              alt=""
              className="menuImage1"
              src={menuSectionPng1}
              fluid
            />{' '}
            *
            {/* <img
                  className="menuImage1"
                  style={{ borderRadius: '20px' }}
                  width="800px"
                  height="600px"
                  src={menuSectionPng1}
                  alt=""
                /> */}
          </Col>
          <Col className="text-center">
            <div className="textDownNews text-center">
              Приходи к нам,чтобы попробовать один из самых дымных кальянов на Табабке💥💥💥 Куча
              разных вкусов табака от "Кактуса с ромашкой" до "Секса на даче"
            </div>
          </Col>
        </Row>
        <Row className="pb-5 pt-5">
          <Col className="text-center">
            <button className="btnMy">Узнать подробнее о меню</button>
          </Col>
        </Row>
        <Row className="secondRows pt-5 ">
          <Col className="text-center">
            <div className="textDownNews text-center">
              Приходи к нам,чтобы попробовать один из самых дымных кальянов на Табабке💥💥💥 Куча
              разных вкусов табака от "Кактуса с ромашкой" до "Секса на даче"
            </div>
          </Col>
          <Col sm={6} className="imgMenuSection2">
            <Image
              style={{ borderRadius: '20px' }}
              alt=""
              className="menuImage1"
              src={menuSectionPng2}
              fluid
            />{' '}
            *
            {/* <img
                  className="menuImage1"
                  style={{ borderRadius: '20px' }}
                  width="800px"
                  height="600px"
                  src={menuSectionPng1}
                  alt=""
                /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MenuSection;
