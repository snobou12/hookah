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
                    height="500px"
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
                    height="500px"
                    src={aboutSectionImg1}
                  />
                </a>
              </Col>
            </Row>

            <Row className="justify-content-md-center">
              <Col className="itemAboutSection3">
                <a data-fancybox="gallery" href={aboutSectionImg3}>
                  <img
                    alt="aboutImg"
                    className="aboutSectionImg mt-5"
                    width="320px"
                    height="500px"
                    src={aboutSectionImg3}
                  />
                </a>
              </Col>
              <Col className="itemAboutSection4">
                <a data-fancybox="gallery" href={aboutSectionImg3}>
                  <img
                    alt="aboutImg"
                    className="aboutSectionImg mt-5"
                    width="320px"
                    height="500px"
                    src={aboutSectionImg3}
                  />
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm={6}>
            <div className="textDownAbout mt-5 text-justify">
              <div>
                Уютное пространство для отличного отдыха — это наша кальянная в Санкт-Петербурге.
                Приятная и дружелюбная атмосфера поможет отключиться от будничной суеты и провести
                время за общением и вкусными кальянами И если вы ищете, где покурить кальян,
                приходите к нам! Наш бар способен удивить вас: широким ассортиментом смесей для
                кальяна; отличной барной картой; мастерством наших кальянных гуру. Наше заведение
                очень популярно среди молодежи, но и те, кто постарше, с удовольствием проводят
                время у нас. Вы сможете петь любимые песни с друзьями, танцевать, слушать отличную
                {/* музыку. Посетив однажды кальян <em id="cosaN">Cosa Nostra</em>, вы непременно будете
                возвращаться к нам вновь и вновь. ❗Кальянная в Санкт-Петербурге работающая в
                формате Анти-кафе.💣Место с оригинальным интерьером, где можно окунуться в
                спокойствие или наоборот весело отдохнуть с компанией.🎶💯⚽ Если вы желаете
                покурить кальян в очень приятной атмосфере, шикарно провести свой вечер за чашкой
                любого чая или же просто поиграть в приставку с друзьями, тогда ищи нас по адресу:
                улица Промышленная, дом 6, ЦФТ "Нарвский", 3 этаж❗ */}
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
