import React from 'react';
import { Link } from 'react-router-dom';
import '../css/AboutSection.css';
import aboutSectionImg1 from '../../assets/image/aboutSectionImg1.jpg';
import aboutSectionImg2 from '../../assets/image/aboutSectionImg2.jpg';
import aboutSectionImg3 from '../../assets/image/aboutSectionImg3.jpg';

import 'react-fancybox/lib/fancybox.css';

function AboutSection() {
  return (
    <div className="wrapper">
      <div className="modalImage"></div>
      <div className="wrapperAbout">
        <div className="grid-item-a">
          О нас
          <hr className="short" />
        </div>
        <div className="grid-item-b">
          <a data-fancybox="gallery" href={aboutSectionImg1}>
            <img src={aboutSectionImg1} />
          </a>
          <a data-fancybox="gallery" href={aboutSectionImg2}>
            <img src={aboutSectionImg2} />
          </a>
          <a data-fancybox="gallery" href={aboutSectionImg3}>
            <img src={aboutSectionImg3} />
          </a>
        </div>

        <div className="grid-item-c">
          <div className="textAbout">
            Уютное пространство для отличного отдыха — это наша кальянная в Санкт-Петербурге.
            Приятная и дружелюбная атмосфера поможет отключиться от будничной суеты и провести время
            за общением и вкусными кальянами И если вы ищете, где покурить кальян, приходите к нам!
            Наш бар способен удивить вас: широким ассортиментом смесей для кальяна; отличной барной
            картой; мастерством наших кальянных гуру. Наше заведение очень популярно среди молодежи,
            но и те, кто постарше, с удовольствием проводят время у нас. Вы сможете петь любимые
            песни с друзьями, танцевать, слушать отличную музыку. Посетив однажды кальян{' '}
            <em id="cosaN">Cosa Nostra</em>, вы непременно будете возвращаться к нам вновь и вновь.
          </div>
          <div className="btnDetail">
            <Link to="/aboutUs">
              <button className="btn1">Подробнее</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
