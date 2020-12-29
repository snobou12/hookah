import React from 'react';
import classNames from 'classnames';

import { useSelector, useDispatch } from 'react-redux';
import { minusCountSlider, plusCountSlider, setSlider } from '../redux/actions/topSlider';
import { TableModal } from './';

import '../css/TopSliderWrapper.css';

function TopSliderWrapper() {
  const dispatch = useDispatch();
  const activeImage = useSelector(({ topSlider }) => topSlider.activeItem);

  const clickPlus = (index) => {
    if (activeImage < 3) {
      dispatch(plusCountSlider(index));
    } else {
      dispatch(setSlider(0));
    }
  };

  const clickMinus = (index) => {
    if (activeImage > 0) {
      dispatch(minusCountSlider(index));
    } else {
      dispatch(setSlider(3));
    }
  };

  return (
    <div className="top-slider-wrapper">
      <div className="top-slider">
        <div
          className={classNames('itemTopSlider', {
            firstImage: activeImage === 0,
            secondImage: activeImage === 1,
            thirdImage: activeImage === 2,
            quadImage: activeImage === 3,
          })}>
          <div className="table">
            <div className="table-cell">
              <div className="container">
                <div className="slider">
                  <div className="title">
                    HOOKAH LOUNGE <br /> COSA NOSTRA
                  </div>

                  <div className="text">
                    <span className="relative"></span>
                  </div>

                  <TableModal kindInfo={'Бронирование столика'} kind={'ЗАБРОНИРОВАТЬ СТОЛ'} />
                  <TableModal
                    kindInfo={'Бронирование мероприятия'}
                    kind={'ЗАБРОНИРОВАТЬ МЕРОПРИЯТИЕ'}
                  />
                  <nav onClick={() => clickPlus(1)} id="next-btn">
                    <a className="next-icon"></a>
                  </nav>
                  <nav onClick={() => clickMinus(1)} id="prev-btn">
                    <a className="prev-icon"></a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSliderWrapper;