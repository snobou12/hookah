import React from 'react';
import { setMenuItem } from '../redux/actions/headerMenu';
import { setRefEvent } from '../redux/actions/refEvent';
import { useDispatch, useSelector } from 'react-redux';

import {
  GalerySliderWrapper,
  AboutSection,
  MenuSection,
  NewsSection,
  EventSection,
  EventRequestSection,
  TopImg,
} from '../components';

function MainPage() {
  const dispatch = useDispatch();
  const ref = useSelector(({ refEvent }) => refEvent.ref);
  const smoothToEventSelector = () =>
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'end',
    });
  const myRef = React.useRef();

  React.useEffect(() => {
    dispatch(setMenuItem(null));
    dispatch(setRefEvent(myRef));
  }, []);

  return (
    <div className="wrapperMainPage ">
      <TopImg smoothToEventSelectorProp={smoothToEventSelector} />
      <AboutSection />

      <EventSection smoothToEventSelectorProp={smoothToEventSelector} />

      <MenuSection />

      <NewsSection />
      <GalerySliderWrapper />
      <div ref={myRef}>
        <EventRequestSection />
      </div>
    </div>
  );
}

export default MainPage;
