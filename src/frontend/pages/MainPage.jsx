import React from 'react';

import { TopSliderWrapper, AboutSection, MenuSection, GoogleMap } from '../components';

function MainPage({ clickActiveItemsFunc }) {
  const clickActiveItem = (index) => {
    clickActiveItemsFunc(index);
  };
  return (
    <div className="wrapperMainPage ">
      <TopSliderWrapper />
      <AboutSection activeItemClick={clickActiveItem} />
      <MenuSection />
      <GoogleMap />
    </div>
  );
}

export default MainPage;
