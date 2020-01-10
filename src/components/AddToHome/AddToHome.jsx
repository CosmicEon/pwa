import React, { useState } from 'react';
import { shouldDisplayPopUp } from '../../utils/helpers';
import './style.css';

const AddToHome = (props) => {
  const [bannerVisible, setBannerVisible] = useState(true);

  const onAddToHomescreenClick = () => {
    props.onAddToHomescreenClick();
  };

  const handleCloseBannerBtnClick = () => setBannerVisible(false);

  const { title, icon } = props;
  // const shouldRender = true; // for testing
  const shouldRender = bannerVisible && shouldDisplayPopUp();

  return (
    <div>
      {shouldRender ? (
        <div className="add-to-home-banner">
          <div className="add-to-home-content">
            {icon ?
              <img className="add-to-home-icon" src={icon} alt="home icon"/> :
              null}
            <div className="add-to-home-text">
              <a onClick={onAddToHomescreenClick}>
                {title || 'Add to home screen'}
              </a>
            </div>
          </div>
          <button
            className="add-to-home-close-btn"
            onClick={()=>handleCloseBannerBtnClick()}
          >close</button>
        </div>
      ) : null}
    </div>
  );
};

export default AddToHome;