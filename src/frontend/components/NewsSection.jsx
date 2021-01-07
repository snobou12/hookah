import React from 'react';

import news1 from '../../assets/image/news1.jpg';

import { Container, CardDeck, Card, Button } from 'react-bootstrap';
import '../css/NewsSection.css';
import 'react-fancybox/lib/fancybox.css';
function NewsSection() {
  return (
    <div className="news-section-wrapper">
      <Container fluid>
        <div className="textTopNews p-5">
          <h2 className="textTopNews text-center mt-5">Новости</h2>
          <hr className="short text-center" />
        </div>

        <CardDeck className="pb-5">
          <Card
            style={{
              backgroundColor: '#230329',
              border: ' solid 5px white',
              borderRadius: '0 0 20px 20px',
            }}>
            <Card.Img variant="top" src={news1} />
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
          <Card
            style={{
              backgroundColor: '#230329',
              border: ' solid 5px white',
              borderRadius: '0 0 20px 20px',
            }}>
            <Card.Img variant="top" src={news1} />
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
          <Card
            style={{
              backgroundColor: '#230329',
              border: ' solid 5px white',
              borderRadius: '0 0 20px 20px',
            }}>
            <Card.Img variant="top" src={news1} />
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
          <Card
            style={{
              backgroundColor: '#230329',
              border: ' solid 5px white',
              borderRadius: '0 0 20px 20px',
            }}>
            <Card.Img variant="top" src={news1} />
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
          <Card
            style={{
              backgroundColor: '#230329',
              border: ' solid 5px white',
              borderRadius: '0 0 20px 20px',
            }}>
            <Card.Img variant="top" src={news1} />
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
        </CardDeck>
      </Container>
    </div>
  );
}

export default NewsSection;
