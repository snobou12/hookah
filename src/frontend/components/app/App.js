import React from 'react';
import { Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { setNowData } from '../../redux/actions/nowData';

import { AboutUsPage, MainPage, MenuPage, NewsPage } from '../../pages';
import { Footer, Header, YandexMap } from '../';
import '../../css/App.css';

function App() {
  const dispatch = useDispatch();
  const activeItem = useSelector(({ headerMenu }) => headerMenu.activeItem);

  const clickActiveItem = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  React.useEffect(() => {
    const arrDate = [];
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let ddNumber = Number(dd);
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    for (let i = 0; i < 7; i++) {
      arrDate.push((today = ddNumber + i + '/' + mm + '/' + yyyy));
    }
    dispatch(setNowData(arrDate));
  }, []);

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
      </div>
      <YandexMap />
      <Footer clickSmooth={clickActiveItem} />
    </div>
  );
}

export default App;
