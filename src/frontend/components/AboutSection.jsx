import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

import '../css/AboutSection.css';
import aboutSectionImg1 from '../../assets/image/aboutSectionImg1.jpg';
import aboutSectionImg2 from '../../assets/image/aboutSectionImg2.jpg';
import aboutSectionImg3 from '../../assets/image/aboutSectionImg3.jpg';

function AboutSection() {
  return (
    <div className="about-section-wrapper">
      <Container fluid>
        <Row>
          <Col>
            <h2 className="textTopAbout text-center mt-5">О нас</h2>
            <hr className="short text-center" />
          </Col>
        </Row>

        <Row className=" pb-5">
          <Col sm={6}>
            <Row className="justify-content-md-center">
              <Col className="itemAboutSection1">
                <a data-fancybox="gallery" href={aboutSectionImg2}>
                  <img
                    alt="aboutImg"
                    className="aboutSectionImg mt-5"
                    width="320px"
                    height="422px"
                    src={aboutSectionImg2}
                  />
                </a>
              </Col>
              <Col className="itemAboutSection2">
                <a data-fancybox="gallery" href={aboutSectionImg1}>
                  <img
                    alt="aboutImg"
                    className="aboutSectionImg mt-5"
                    width="320px"
                    height="422px"
                    src={aboutSectionImg1}
                  />
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm={6}>
            <div className="textDownAbout mt-5 ">
              <div className="text-center">
                Уютное пространство для отличного отдыха — это наша кальянная в Санкт-Петербурге.
                Приятная и дружелюбная атмосфера поможет отключиться от будничной суеты и провести
                время за общением и вкусными кальянами И если вы ищете, где покурить кальян,
                приходите к нам в место с оригинальным интерьером, где можно окунуться в спокойствие
                или наоборот весело отдохнуть с компанией. Если вы желаете покурить кальян в очень
                приятной атмосфере, шикарно провести свой вечер за чашкой любого чая или же просто
                поиграть в приставку с друзьями, тогда ищите нас по адресу: улица Промышленная, дом
                6, ЦФТ "Нарвский", 3 этаж
              </div>
              <div className="pt-5 text-center">
                <button className="btnMy ">Узнать подробнее о нас</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutSection;
