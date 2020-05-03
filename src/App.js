import React, { useState } from 'react';
import Map from './Map';
import './App.css';

function App() {
  const [select, setSelect] = useState(undefined)
  
  const handleClick = () => {
    setSelect("District_21")
  }

  return (
    <div className="App">
      <header className="App-header">
        <Map selectedDistrict={select} onClick={(a) => setSelect(a)}  />
        <button onClick={handleClick}>select District 21!</button>
      </header>
    </div>
  );
}

export default App;
