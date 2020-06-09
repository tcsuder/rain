import React, { useState } from 'react';
import './styles.scss';

const App = () => {
  const [drops, setDrops] = useState(5);
  const rain = Array.apply(null, new Array(drops));

  return (
    <div className="App">
      <div className="sky">
        {rain.map((_, idx) => (
          <div key={idx} className="drop" />
        ))}
      </div>
      <div
        className="earth"
        onClick={() => {
          setDrops(drops + 10);
        }}>
        {rain.map((_, idx) => (
          <div key={idx} className="puddle" />
        ))}
      </div>
    </div>
  );
};

export default App;
