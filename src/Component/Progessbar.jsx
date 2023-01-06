import React from 'react';
import { render } from 'react-dom';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 90;

const App = () => (
  <div >
    <CircularProgressbar 
      percentage={percentage}
      text={`${percentage}%`}
      styles={{
        path: {
          transform: 'rotate(90deg)',
          transformOrigin: 'center center',
        },
      }}
      counterClockwise
    />
  </div>
);
