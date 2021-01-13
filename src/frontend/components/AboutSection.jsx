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
function AboutSection() {
  return (
    <div className="about-section-wrapper">
      <Container className="pb-5" fluid>
        <Row className="pt-5">
          <Col>
            <h2 className="textTopAbout text-center ">О нас</h2>
            <hr className="short text-center" />
          </Col>
        </Row>
        <Row className="pt-5">
          <Col sm={5}>
            <div>
              <Row>
                <Col className="text-right" xs={6}>
                  <div className="element">
                    <a data-fancybox="gallery" href={aboutSectionImg1}>
                      <img
                        className="aboutSectionImg"
                        alt="aboutImg"
                        className="aboutSectionImg mt-5"
                        src={aboutSectionImg1Small}
                      />
                    </a>
                  </div>
                  <div className="element">
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
            <div className="text-center textDownAbout">
              Уютное пространство для отличного отдыха — это наша кальянная в Санкт-Петербурге.
              Приятная и дружелюбная атмосфера поможет отключиться от будничной суеты и провести
              время за общением и вкусными кальянами И если вы ищете, где покурить кальян, приходите
              к нам в место с оригинальным интерьером, где можно окунуться в спокойствие или
              наоборот весело отдохнуть с компанией. Если вы желаете покурить кальян в очень
              приятной атмосфере, шикарно провести свой вечер за чашкой любого чая или же просто
              поиграть в приставку с друзьями, тогда ищите нас по адресу: улица Промышленная, дом 6,
              ЦФТ "Нарвский", 3 этаж
            </div>
            <div className="pt-5 text-center">
              <button className="btnMy ">Узнать подробнее о нас</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutSection;
