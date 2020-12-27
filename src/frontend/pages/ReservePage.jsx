import React from 'react';
import '../css/pageCss/ReservePage.css';
import tablePng from '../../assets/image/table3.png';

function ReservePage() {
  return (
    <div className="wrapperReserve">
      <div className="flexWrapp">
        <div className="item">
          <div className="itemCount">1</div>
          <img src={tablePng} alt="" />
        </div>

        <div className="item">
          <div className="itemCount">2</div>

          <img src={tablePng} alt="" />
        </div>
        <div className="item">
          <div className="itemCount">3</div>

          <img src={tablePng} alt="" />
        </div>
        <div className="item">
          <div className="itemCount">4</div>
          <img src={tablePng} alt="" />
        </div>
        <div className="item">
          <div className="itemCount">5</div>
          <img src={tablePng} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ReservePage;
