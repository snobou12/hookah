import React from 'react';
import { setMenuItem } from '../redux/actions/headerMenu';
import { useDispatch, useSelector } from 'react-redux';
import { TopSliderWrapper, AboutSection, MenuSection, NewsSection } from '../components';

function MainPage() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setMenuItem(null));
  }, []);
  return (
    <div className="wrapperMainPage ">
      <TopSliderWrapper />
      <AboutSection />
      <NewsSection />
      <MenuSection />
    </div>
  );
}

export default MainPage;
