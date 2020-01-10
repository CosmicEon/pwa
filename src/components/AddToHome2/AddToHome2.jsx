import React, { useState } from 'react';
import { shouldDisplayPopUp } from '../../utils/helpers';
import './style.css';

const AddToHome2 = (props) => {
  const [bannerVisible, setBannerVisible] = useState(false);
  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    setBannerVisible(true);
  })

  const handleOnAddToHomescreen = (e) => {
    e.preventDefault();

    deferredPrompt.prompt();  // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
      .then((choiceResult) => {

        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }

        deferredPrompt = null;

      });
  }

  // const shouldRender = true; // for testing
  const shouldRender = bannerVisible && shouldDisplayPopUp();

  return (
    <div>
      {shouldRender ? (
        <div>
          <button
            className="ad2hs-prompt"
            onClick={(e) => handleOnAddToHomescreen(e)}
          >Install Web App</button>
        </div>
      ) : null}
    </div>
  );
};

export default AddToHome2;