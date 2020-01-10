import React from 'react';
import AddToHome from '../AddToHome/AddToHome';
import AddToHome2 from '../AddToHome2/AddToHome2';
import logo from './logo.svg';
import './App.css';

function App() {

  const handleHomeMenuIcon = (e) => {
    e.preventDefault();
    // Stash the event so it can be triggered later.
    // deferredPrompt = e;
    window.showInstallPromotion();
  }

  return (
    <div className="App">
      {/* <button onClick={(e) => handleHomeMenuIcon(e)}>add icon</button> */}
      {/* <AddToHome onAddToHomescreenClick={handleHomeMenuIcon}/> */}
      {/* <AddToHome2 /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
