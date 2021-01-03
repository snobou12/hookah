import React from 'react';

import { Link } from 'react-router-dom';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import vkLogo from '../../assets/image/vkLogo.png';
import yandexLogo from '../../assets/image/yandexLogo.png';
import instagramLogo from '../../assets/image/instagramLogo.png';
import '../css/Footer.css';
function Footer({ clickSmooth }) {
  const liItems = [
    { name: 'О нас', link: 'aboutUs', id: 0 },
    { name: 'Меню', link: 'menu', id: 1 },
    { name: 'Новости', link: 'news', id: 2 },
  ];

  return (
    <div className="footerClass">
      <Container fluid>
        <Row className="pb-3 text-center">
          <Col className="text-center" sm="4">
            <h2 className="headlineText text-center ">Основные разделы</h2>
            <div className="menuFooter">
              <li onClick={() => clickSmooth()}>
                <Link to="/">Главная</Link>
              </li>
              {liItems.map((obj) => (
                <li onClick={() => clickSmooth()} key={`${obj.name}:${obj.id}`}>
                  <Link key={obj.id} to={`/${obj.link}`}>
                    {obj.name}
                  </Link>
                </li>
              ))}
            </div>
          </Col>
          <Col className="text-center" sm="4">
            <h2 className="headlineText text-center ">Контакты</h2>
            <span className="textAdress"> ул. Промышленная, дом 6, ЦФТ "Нарвский</span> <br />{' '}
            <span>Санкт-Петербург</span>
            <br />
            +7 (911) 926-60-10
          </Col>

          <Col className="social text-center" sm="4">
            <h2 className=" headlineText text-center ">Кальянная</h2>
            <div className="hookanFooterText text-center">
              Hookan Launge это lounge bar и ресторан. У нас вы сможете насладиться вкуснейшими
              ароматами дымного кальяна в кругу своих друзей. Мы создали все условия для отличного
              отдыха.
            </div>
            <div className="pt-3">
              <a href="#">
                <i>
                  <img src={vkLogo} />
                </i>
              </a>
              <a href="#">
                <i>
                  <img src={instagramLogo} />
                </i>
              </a>
              <a href="#">
                <i>
                  <img src={yandexLogo} />
                </i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
