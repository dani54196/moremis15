import React from 'react';
import Wish from './Wish';

import crown from "./img/crown.png"

const Countdown = ({ countdownData, name }) => {
  if (!countdownData.isItBday) {
    return (
      <div>
        <div className='countdown-wrapper'>
          <div className='countdown-box'>
          <span className='legend'>Faltan</span>
            {countdownData.days}
            <span className='legend'>Días</span>
          </div>
          {/* <div className='countdown-box'>
            {countdownData.hours}
            <span className='legend'>Horas</span>
          </div>
          <div className='countdown-box'>
            {countdownData.minutes}
            <span className='legend'>Minutos</span>
          </div>
          <div className='countdown-box'>
            {countdownData.seconds}
            <span className='legend'>Segundos</span>
          </div> */}
        </div>
        <h1 >Preparate...</h1>
        <h1 className='heading'><span className='highlight'>{name}  </span></h1>
        <img src={crown} width="70"/>
      </div>
    );
  } else {
    return <Wish name={name} />;
  }
};

export default Countdown;
