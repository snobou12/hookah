import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Image } from 'react-bootstrap';

import '../css/AboutSection.css';
import aboutSectionImg1 from '../../assets/image/aboutSectionImg1.jpg';
import aboutSectionImg1Small from '../../assets/image/aboutSectionImg1Small.jpg';
import aboutSectionImg2 from '../../assets/image/aboutSectionImg2.jpg';
import aboutSectionImg2Small from '../../assets/image/aboutSectionImg2Small.jpg';
import aboutSectionImg3 from '../../assets/image/aboutSectionImg3.jpg';
import aboutSectionImg3Small from '../../assets/image/aboutSectionImg3Small.jpg';
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
          <Col sm={5}>
            <div>
              <Row className="rowAboutSection">
                <Col className="text-right" xs={6}>
                  <div className="element pdImage1">
                    <a data-fancybox="gallery" href={aboutSectionImg1}>
                      <img
                        className="aboutSectionImg"
                        alt="aboutImg"
                        className="aboutSectionImg mt-5"
                        src={aboutSectionImg1Small}
                      />
                    </a>
                  </div>
                  <div className="element pdImage2">
                    <a data-fancybox="gallery" href={aboutSectionImg3}>
                      <img
                        className="aboutSectionImg"
                        alt="aboutImg"
                        className="aboutSectionImg mt-5"
                        src={aboutSectionImg3Small}
                      />
                    </a>
                  </div>
                </Col>
                <Col xs={6} className="text-left pdImage3">
                  <div className="element">
                    <a data-fancybox="gallery" href={aboutSectionImg2}>
                      <img
                        className="aboutSectionImg"
                        alt="aboutImg"
                        className="aboutSectionImg mt-5"
                        src={aboutSectionImg2Small}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="pdTextAbout text-left" sm={7}>
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
                <button className="btnMy ">Просмотреть галерею</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="fullSecondContainer pb-5">
        <Row className="pt-5">
          <Col>
            <h2 className="textTopAbout text-center ">О нас</h2>
            <hr className="short text-center" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <a data-fancybox="gallery2" href={aboutSectionImg3}>
              <img
                className="aboutSectionImg"
                alt="aboutImg"
                className="aboutSectionImg mt-5"
                src={aboutSectionImg3Small}
              />
            </a>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <a data-fancybox="gallery2" href={aboutSectionImg1}>
              <img
                className="aboutSectionImg"
                alt="aboutImg"
                className="aboutSectionImg mt-5"
                src={aboutSectionImg1Small}
              />
            </a>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <a data-fancybox="gallery2" href={aboutSectionImg2}>
              <img
                className="aboutSectionImg"
                alt="aboutImg"
                className="aboutSectionImg mt-5"
                src={aboutSectionImg2Small}
              />
            </a>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="text-center textDownAbout pt-5">
              Здравствуйте, меня зовут Иван! Я владелец Cosanostra.narvskiy Работа в этом заведении
              для меня прежде всего любимое дело, в которое я вкладываю все свои силы и душу!
              Приходите к нам для встречи с друзьями и просто отдохнуть! Буду рад Вас видеть! <br />
              К Вашим услугам: <br /> - потрясающие паровые коктейли на Premium смесях
              <br /> - VIP комната с Караоке <br />- 3 игровые зоны Xbox, PS4
              <br /> - Настольные игры <br />- Вкуснейшие чаи и другие напитки
              <br />- Нет пробкового сбора
            </div>
            <div className="pt-3 text-center">
              <Link onClick={smoothProp} to="/galery">
                <button className="btnMy ">Просмотреть галерею</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutSection;
