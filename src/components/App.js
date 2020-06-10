import React, { Fragment, useState } from 'react';
import './styles.scss';

const App = () => {
  const [drops, setDrops] = useState(6);
  const rain = Array.apply(null, new Array(drops));
  const droplets = Array.apply(null, new Array(6));

  return (
    <div className="App">
      <div className="sky">
        {rain.map((_, i) => (
          <div key={i} className="drop" />
        ))}
      </div>
      <div className="ground">
        {rain.map((_, i) => (
          <div key={i} className="splash">
            {droplets.map((_, j) => (
              <div
                key={j}
                className={Math.floor(Math.random() * 2) === 0 ? 'droplet' : ''}
              />
            ))}
          </div>
        ))}
      </div>
      <div
        className="earth"
        onClick={() => {
          if (drops < 100) {
            setDrops(drops + 10);
          } else {
            setDrops(5);
          }
        }}>
        {rain.map((_, i) => (
          <div key={i} className="puddle" />
        ))}
      </div>
    </div>
  );
};

export default App;
