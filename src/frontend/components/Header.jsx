import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../../assets/image/logo.png';
import { withRouter } from 'react-router-dom';

function Header({ clickActiveItemsFunc, activeItemProp }) {
  const liItems = [
    { name: 'О НАС', link: 'aboutUs', id: 0 },
    { name: 'МЕНЮ', link: 'menu', id: 1 },
    { name: 'НОВОСТИ', link: 'news', id: 2 },
    { name: 'ГАЛЕРЕЯ', link: 'galery', id: 3 },
  ];

  const clickActiveItem = (index) => {
    clickActiveItemsFunc(index);
  };

  return (
    <header>
      <div className="logo">
        <li onClick={() => clickActiveItem(null)}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </li>
      </div>

      <div className="top-menu">
        <ul>
          {liItems.map((obj) => (
            <li
              className={activeItemProp == obj.id ? 'active' : ''}
              onClick={() => clickActiveItem(obj.id)}
              key={`${obj.name}:${obj.id}`}>
              <Link key={obj.id} to={`/${obj.link}`}>
                {obj.name}{' '}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block-top-info">
        <p>
          <a className="numberClass" href="tel:+79119266010">
            +7 (911) 926-60-10
          </a>
        </p>
        <p>
          <a
            id="classAdress"
            target="_blank"
            href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.274143%2C59.899922&mode=search&oid=190233781943&ol=biz&sctx=ZAAAAAgBEAAaKAoSCfDXCdSHwEJAESEuzlIR60tAEhIJa6RIMWH7oT8R9I2ONkI%2Fkz8oCkC2rgdIAFXNzMw%2BWABqAnJ1cACdAc3MTD2gAQCoAQC9AYhvbV7CARLs78Oxyga3zcTWxAXEq8Xi5AI%3D&sll=30.274143%2C59.899922&sspn=0.008780%2C0.004394&text=Lounge%20Bar%20%D0%BD%D0%B0%D1%80%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%D1%81%D0%BF%D0%B1&z=16">
            г. СПБ, ул. Промышленная,
            <br /> дом 6, ЦФТ "Нарвский
          </a>
        </p>
      </div>
    </header>
  );
}

export default withRouter(Header);
