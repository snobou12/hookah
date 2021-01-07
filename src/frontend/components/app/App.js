import React from 'react';
import { Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { AboutUsPage, MainPage, MenuPage, NewsPage, AdminPage } from '../../pages';
import { Footer, Header, YandexMap } from '../';

import '../../css/App.css';
import ScrollToTop from '../ScrollToTop';

function App() {
  const activeItem = useSelector(({ headerMenu }) => headerMenu.activeItem);

  const clickActiveItem = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="main-wrapper">
      <Header clickSmooth={clickActiveItem} activeItemProp={activeItem} />

      <div className="contentPage">
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/aboutUs" exact>
          <AboutUsPage />
        </Route>

        <Route path="/menu" exact>
          <MenuPage />
        </Route>

        <Route path="/news" exact>
          <NewsPage />
        </Route>
        <Route path="/admin" exact>
          <AdminPage />
        </Route>
      </div>
      <YandexMap />
      <Footer clickSmooth={clickActiveItem} />
      <ScrollToTop />
    </div>
  );
}

export default App;
