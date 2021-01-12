import React from 'react';

import news1 from '../../assets/image/news1.jpg';
import news2 from '../../assets/image/news2.jpg';
import news3 from '../../assets/image/news3.jpg';
import news4 from '../../assets/image/news4.jpg';

import { Container, CardDeck, Card, Button, Row, Col } from 'react-bootstrap';
import '../css/NewsSection.css';
import 'react-fancybox/lib/fancybox.css';
function NewsSection() {
  return (
    <div className="news-section-wrapper">
      <Container>
        <Row>
          <Col>
            <div className="textTopNews pb-5">
              <h2 className="textTopNews text-center mt-5">Последние новости</h2>
              <hr className="short text-center" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="cardItem1">
              <Card
                className="cardItem1"
                style={{
                  backgroundColor: '#230329',
                  border: ' solid 5px white',
                  borderRadius: '20px 20px 20px 20px',
                  minWidth: '340px',
                }}>
                <Card.Img
                  style={{ borderRadius: '20px 20px 0 0' }}
                  height="300px"
                  variant="top"
                  src={news1}
                />
                <Card.Body>
                  <Card.Title>
                    <div className="textDownNews text-center bold">Новый табак</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="textDownNews text-center">
                      Приходи к нам,чтобы попробовать один из самых дымных кальянов на Табабке💥💥💥
                      Куча разных вкусов табака от "Кактуса с ромашкой" до "Секса на даче"
                    </div>
                  </Card.Text>
                  <div className="text-center">
                    <Button variant="dark">Узнать подробнее</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <Card
              style={{
                backgroundColor: '#230329',
                border: ' solid 5px white',
                borderRadius: '20px 20px 20px 20px',
                minWidth: '340px',
              }}>
              <Card.Img
                style={{ borderRadius: '20px 20px 0 0' }}
                height="300px"
                variant="top"
                src={news2}
              />
              <Card.Body>
                <Card.Title>
                  <div className="textDownNews text-center bold">Новый табак</div>
                </Card.Title>
                <Card.Text>
                  <div className="textDownNews text-center">
                    Приходи к нам,чтобы попробовать один из самых дымных кальянов на Табабке💥💥💥
                    Куча разных вкусов табака от "Кактуса с ромашкой" до "Секса на даче"
                  </div>
                </Card.Text>
                <div className="text-center">
                  <Button variant="dark">Узнать подробнее</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="pt-5 pb-5">
          <Col>
            <div className="cardItem3">
              <Card
                style={{
                  backgroundColor: '#230329',
                  border: ' solid 5px white',
                  borderRadius: '20px 20px 20px 20px',
                  minWidth: '340px',
                }}>
                <Card.Img
                  style={{ borderRadius: '20px 20px 0 0' }}
                  height="300px"
                  variant="top"
                  src={news3}
                />
                <Card.Body>
                  <Card.Title>
                    <div className="textDownNews text-center bold">Новый табак</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="textDownNews text-center">
                      Приходи к нам,чтобы попробовать один из самых дымных кальянов на Табабке💥💥💥
                      Куча разных вкусов табака от "Кактуса с ромашкой" до "Секса на даче"
                    </div>
                  </Card.Text>
                  <div className="text-center">
                    <Button variant="dark">Узнать подробнее</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <Card
              style={{
                backgroundColor: '#230329',
                border: ' solid 5px white',
                borderRadius: '20px 20px 20px 20px',
                minWidth: '340px',
              }}>
              <Card.Img
                style={{ borderRadius: '20px 20px 0 0' }}
                height="300px"
                variant="top"
                src={news4}
              />
              <Card.Body>
                <Card.Title>
                  <div className="textDownNews text-center bold">Новый табак</div>
                </Card.Title>
                <Card.Text>
                  <div className="textDownNews text-center">
                    Приходи к нам,чтобы попробовать один из самых дымных кальянов на Табабке💥💥💥
                    Куча разных вкусов табака от "Кактуса с ромашкой" до "Секса на даче"
                  </div>
                </Card.Text>
                <div className="text-center">
                  <Button variant="dark">Узнать подробнее</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewsSection;
