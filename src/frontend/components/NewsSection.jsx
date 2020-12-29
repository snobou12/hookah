import React from 'react';
import '../css/NewsSection.css';
import news1 from '../../assets/image/news1.jpg';
import news2 from '../../assets/image/news2.jpg';
import news3 from '../../assets/image/news3.jpg';
import 'react-fancybox/lib/fancybox.css';
function NewsSection() {
  return (
    <div className="containerNews">
      <div className="hrContent">
        Новости
        <hr className="short" />
      </div>
      <div className="flex">
        <div className="itemNew">
          <div className="holder">
            <a data-fancybox="newsGal" href={news1}>
              <img src={news1} />
            </a>
            <div className="block fade">
              Приходи к нам,чтобы попробовать один из самых дымных кальянов на Табабке💥💥💥 Куча
              разных вкусов табака от "Кактуса с ромашкой" до "Секса на даче"
            </div>
          </div>
          <div className="btnBlock">
            <button className="learn-more">
              <div className="circle">
                <span className="icon arrow"></span>
              </div>
              <p className="button-text">Узнать больше</p>
            </button>
          </div>
        </div>
        <div className="itemNew">
          <div className="holder">
            <a data-fancybox="newsGal" href={news2}>
              <img src={news2} />
            </a>
            <div className="block fade">
              Конор очень злится, когда клиенты не играют в UFC😡😁 Приходи в гости и зарубись не на
              шутку под вкусный дымный кальян😎💥💭
            </div>
          </div>
          <div className="btnBlock">
            <button className="learn-more">
              <div className="circle">
                <span className="icon arrow"></span>
              </div>
              <p className="button-text">Узнать больше</p>
            </button>
          </div>
        </div>
        <div className="itemNew">
          <div className="holder">
            <a caption="kek" data-fancybox="newsGal" href={news3}>
              <img src={news3} />
            </a>
            <div className="block fade">
              С созданием новой группы в VK, вступает в силу суперакция на скидку размером в 10%!
              Все подробности в нашей группе вк!
            </div>
          </div>
          <div className="btnBlock">
            <button className="learn-more">
              <div className="circle">
                <span className="icon arrow"></span>
              </div>
              <p className="button-text">Узнать больше</p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="itemNew">
          <div className="holder">
            <a data-fancybox="newsGal" href={news1}>
              <img src={news1} />
            </a>
            <div className="block fade">
              Приходи к нам,чтобы попробовать один из самых дымных кальянов на Табабке💥💥💥 Куча
              разных вкусов табака от "Кактуса с ромашкой" до "Секса на даче"
            </div>
          </div>
          <div className="btnBlock">
            <button className="learn-more">
              <div className="circle">
                <span className="icon arrow"></span>
              </div>
              <p className="button-text">Узнать больше</p>
            </button>
          </div>
        </div>
        <div className="itemNew">
          <div className="holder">
            <a data-fancybox="newsGal" href={news2}>
              <img src={news2} />
            </a>
            <div className="block fade">
              Конор очень злится, когда клиенты не играют в UFC😡😁 Приходи в гости и зарубись не на
              шутку под вкусный дымный кальян😎💥💭
            </div>
          </div>
          <div className="btnBlock">
            <button className="learn-more">
              <div className="circle">
                <span className="icon arrow"></span>
              </div>
              <p className="button-text">Узнать больше</p>
            </button>
          </div>
        </div>
        <div className="itemNew">
          <div className="holder">
            <a caption="kek" data-fancybox="newsGal" href={news3}>
              <img src={news3} />
            </a>
            <div className="block fade">
              С созданием новой группы в VK, вступает в силу суперакция на скидку размером в 10%!
              Все подробности в нашей группе вк!
            </div>
          </div>
          <div className="btnBlock">
            <button className="learn-more">
              <div className="circle">
                <span className="icon arrow"></span>
              </div>
              <p className="button-text">Узнать больше</p>
            </button>
          </div>
        </div>
      </div>
      <div className="hrContent"></div>
    </div>
  );
}

export default NewsSection;
