import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Image } from 'react-bootstrap';

import '../css/AboutSection.css';

import aboutSectionImg1 from '../../assets/image/aboutSectionImg2.jpg';
import aboutSectionImg1Small from '../../assets/image/aboutSectionImg2Small.jpg';

{
}
function AboutSection({ smoothProp }) {
  return (
    <div className="about-section-wrapper">
      <Container className="fullFirstContainer pb-5" fluid>
        <Row className="pt-5">
          <Col>
            <h2 className="textTopAbout text-center ">О нас</h2>
            <hr className="short text-center" />
          </Col>
        </Row>
        <Row className="rowAboutSection pt-5">
          <Col className="text-center" sm={6}>
            <a data-fancybox="gallery" href={aboutSectionImg1}>
              <img className="mainImgAboutSection" alt="aboutImg" src={aboutSectionImg1} />
            </a>
          </Col>
          <Col className="pdTextAbout pt-5" sm={6}>
            <div className="text-justify textDownAbout">
              Здравствуйте, меня зовут Иван! Я владелец Cosanostra.narvskiy Работа в этом заведении
              для меня прежде всего любимое дело, в которое я вкладываю все свои силы и душу!
              Приходите к нам для встречи с друзьями и просто отдохнуть! Буду рад Вас видеть! <br />
              К Вашим услугам: <br /> - потрясающие паровые коктейли на Premium смесях
              <br /> - VIP комната с Караоке <br />- 3 игровые зоны Xbox, PS4
              <br /> - Настольные игры <br />- Вкуснейшие чаи и другие напитки
              <br />- Нет пробкового сбора
            </div>
            <div className="pt-5 text-center">
              <Link onClick={smoothProp} to="/galery">
                <button className="btnMyAbout ">Просмотреть галерею</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutSection;
