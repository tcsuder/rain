import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import './styles.scss';

const modifyDropCount = (drops) => {
  // get small subset
  const number = Math.floor(Math.random() * (drops / 2));
  // get random positive / negative number
  const mod = number % 2 === 0 ? number * -1 : number;
  // perform additiona / subtraction within mathematical boundries
  const newDrops = drops + mod > 0 && drops + mod < 50 ? drops + mod : drops;

  return drops + mod;
};

const buildArray = (count) => Array.apply(null, new Array(count));

const App = () => {
  const [rain, setRain] = useState(20);
  const droplets = useState(6)[0];

  return (
    <div className="App">
      <div className="sky">
        {buildArray(rain).map((_, i) => (
          <div key={i} className="drop" />
        ))}
      </div>
      <div className="ground">
        {buildArray(rain).map((_, i) => (
          <div key={i} className="splash">
            {buildArray(droplets).map((_, j) => (
              <div
                key={j}
                className={Math.floor(Math.random() * 2) === 0 ? 'droplet' : ''}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="earth">
        {buildArray(rain).map((_, i) => (
          <div key={i} className="puddle" />
        ))}
      </div>
      <div className="controls">
        <button
          onClick={() => {
            rain < 70 && setRain(rain + 5);
          }}>
          +
        </button>
        <button
          onClick={() => {
            rain > 5 && setRain(rain - 5);
          }}>
          -
        </button>
      </div>
    </div>
  );
};

export default App;
