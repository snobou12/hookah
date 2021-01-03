import React from 'react';
import { Container, Row, Col, CardImg } from 'react-bootstrap';
import menuSectionPng1 from '../../assets/image/menuSection1.jpg';
import menuSectionPng2 from '../../assets/image/menuSection2.jpg';
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

        <Row className="pt-5 ">
          <Col>
            <Row className="justify-content-md-center">
              <Col className="text-center">
                <img width="600px" src={menuSectionPng1} alt="" />
              </Col>
              <Col className="text-center">
                <div className="textDownNews text-center">
                  Приходи к нам,чтобы попробовать один из самых дымных кальянов на Табабке💥💥💥
                  Куча разных вкусов табака от "Кактуса с ромашкой" до "Секса на даче"
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="pb-5 pt-5">
          <Col className="text-center">
            <button className="btnMy">Узнать подробнее о меню</button>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col>
            <Row className="justify-content-md-center">
              <Col className="text-center">
                <div className="textDownNews text-center">
                  Приходиs к нам,чтобы попробовать один из самых дымных кальянов на Табабке💥💥💥
                  Куча разных вкусов табака от "Кактуса с ромашкой" до "Секса на даче"
                </div>
              </Col>
              <Col className="text-center">
                <img width="600px" src={menuSectionPng1} alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MenuSection;
