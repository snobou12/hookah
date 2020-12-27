import React from 'react';
import classNames from 'classnames';

import { useSelector, useDispatch } from 'react-redux';
import { minusCountSlider, plusCountSlider, setSlider } from '../redux/actions/topSlider';

import '../css/TopSliderWrapper.css';
import { Link } from 'react-router-dom';

function TopSliderWrapper({ activeItemClick }) {
  const dispatch = useDispatch();
  const activeImage = useSelector(({ topSlider }) => topSlider.activeItem);

  const clickPlus = (index) => {
    if (activeImage < 3) {
      dispatch(plusCountSlider(index));
    } else {
      dispatch(setSlider(0));
    }
  };

  const clickActiveItem = (index) => {
    activeItemClick(index);
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
                  <Link to="/reserve">
                    <a onClick={() => clickActiveItem(3)} className="btn">
                      Забронировать столик
                    </a>
                  </Link>
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
