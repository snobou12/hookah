import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

import vkLogo from '../../assets/image/vkIcon.png';
import yandexLogo from '../../assets/image/yandexLogo.png';
import instagramLogo from '../../assets/image/instagramIcon.png';

function Footer({ clickActiveItemsFunc }) {
  const liItems = [
    { name: 'О НАС', link: 'aboutUs', id: 0 },
    { name: 'МЕНЮ', link: 'menu', id: 1 },
    { name: 'Новости', link: 'news', id: 2 },
    { name: 'ЗАБРОНИРОВАТЬ', link: 'reserve', id: 3 },
  ];

  const clickActiveItem = (index) => {
    clickActiveItemsFunc(index);
  };

  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h2 id="cursiveTextMenu">Основные разделы</h2>
        <div className="footer-links">
          <ul className="menuFooter">
            <Link to="/">
              <li onClick={() => clickActiveItem(null)}>
                <a href="/#">Главная</a>
              </li>
            </Link>
            {liItems.map((obj) => (
              <li onClick={() => clickActiveItem(obj.id)} key={`${obj.name}:${obj.id}`}>
                <Link key={obj.id} to={`/${obj.link}`}>
                  {obj.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>

          <p>
            <h2 id="cursiveTextContacts">Контакты</h2>
            <span> ул. Промышленная, дом 6, ЦФТ "Нарвский</span> <span>Санкт-Петербург</span>
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <a id="phoneClass" href="tel:+79119266010">
            +7 (911) 926-60-10
          </a>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">test@test.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <h2 id="cursiveText">Кальянная</h2>
          Hookan Launge это lounge bar и ресторан. У нас вы сможете насладиться вкуснейшими
          ароматами дымного кальяна в кругу своих друзей. Мы создали все условия для отличного
          отдыха.
        </p>

        <div className="footer-icons">
          <a href="https://vk.com/cosaloungebar" target="_blank">
            <div className="vkIcon">
              <img src={vkLogo} alt="vk" />
            </div>
          </a>
          <a href="https://www.instagram.com/cosanostra.narvskiy/" target="_blank">
            <div className="instagramIcon">
              <img src={instagramLogo} alt="inst" />
            </div>
          </a>
          <a
            href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.274143%2C59.899922&mode=search&oid=190233781943&ol=biz&sctx=ZAAAAAgBEAAaKAoSCfDXCdSHwEJAESEuzlIR60tAEhIJa6RIMWH7oT8R9I2ONkI%2Fkz8oCkC2rgdIAFXNzMw%2BWABqAnJ1cACdAc3MTD2gAQCoAQC9AYhvbV7CARLs78Oxyga3zcTWxAXEq8Xi5AI%3D&sll=30.274143%2C59.899922&sspn=0.008780%2C0.004394&text=Lounge%20Bar%20%D0%BD%D0%B0%D1%80%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%D1%81%D0%BF%D0%B1&z=16"
            target="_blank">
            <div className="yandexIcon">
              <img src={yandexLogo} alt="gMap" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
