import React from 'react';
import '../css/MenuSection.css';
function MenuSection() {
  return (
    <div className="wrapperMenuSection">
      <div className="wrapperAboutMenu">
        <div className="grid-item-aMenu">
          Меню
          <hr className="short" />
        </div>
        <div className="grid-item-bMenu">Что-то</div>

        <div className="grid-item-cMenu">
          <div className="textAboutMenu">Что-либо</div>
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
