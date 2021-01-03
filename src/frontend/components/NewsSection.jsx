import React from 'react';

import news1 from '../../assets/image/news1.jpg';
import news2 from '../../assets/image/news2.jpg';
import news3 from '../../assets/image/news3.jpg';
import news4 from '../../assets/image/news4.jpg';
import backGimg from '../../assets/image/dark-leather.png';
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
              borderRadius: '20px 20px 0 0',
            }}>
            <Card.Body>
              <Card.Title>
                <div className="textDownNews text-center bold">Приставка</div>
              </Card.Title>
              <Card.Text>
                <div className="textDownNews text-center">
                  Конор очень злится, когда клиенты не играют в UFC😡😁 Приходи в гости и зарубись
                  не на шутку под вкусный дымный кальян😎💥💭
                </div>
              </Card.Text>
              <div className="text-center">
                <Button variant="dark">Узнать подробнее</Button>
              </div>
            </Card.Body>
            <Card.Img variant="bottom" src={news2} />
          </Card>
          <Card
            style={{
              backgroundColor: '#230329',
              border: ' solid 5px white',
              borderRadius: '0 0 20px 20px',
            }}>
            <Card.Img variant="top" src={news3} />
            <Card.Body>
              <Card.Title>
                <div className="textDownNews text-center bold">Скидка</div>
              </Card.Title>
              <Card.Text>
                <div className="textDownNews text-center">
                  С созданием новой группы в VK, вступает в силу суперакция на скидку размером в
                  10%!От тебя всего лишь требуется:
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
              borderRadius: '20px 20px 0 0',
            }}>
            <Card.Body>
              <Card.Title>
                <div className="textDownNews text-center bold">Караоке</div>
              </Card.Title>
              <Card.Text>
                <div className="textDownNews text-center">
                  Друзья, у нас для Вас есть подарок на Новый год👇😉.. ⬇⬇ Теперь в нашей VIP -
                  комнате установлена КАРАОКЕ🔥🔥🔥 Бронируйте ВИПку и наслаждайтесь отличным звуком
                  и своим исполнением💃🕺
                </div>
              </Card.Text>
              <div className="text-center">
                <Button variant="dark">Узнать подробнее</Button>
              </div>
            </Card.Body>
            <Card.Img variant="bottom" src={news4} />
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
}

export default NewsSection;
