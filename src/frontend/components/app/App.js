import React from 'react';
import { Route } from 'react-router-dom';

import { setMenuItem } from '../../redux/actions/headerMenu';
import { useDispatch, useSelector } from 'react-redux';

import { AboutUsPage, MainPage, MenuPage, GaleryPage, NewsPage } from '../../pages';
import { Footer, Header, YandexMap } from '../';
import '../../css/App.css';

function App() {
  const dispatch = useDispatch();

  const activeItem = useSelector(({ headerMenu }) => headerMenu.activeItem);

  const clickActiveItem = (index) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    dispatch(setMenuItem(index));
    console.log('click');
  };

  return (
    <div className="main-wrapper">
      <Header activeItemProp={activeItem} />
      <div className="contentPage">
        <Route path="/" exact>
          <MainPage clickActiveItemsFunc={clickActiveItem} />
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
      </div>
      <YandexMap />
      <Footer clickActiveItemsFunc={clickActiveItem} />
    </div>
  );
}

export default App;
