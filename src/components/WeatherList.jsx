import React from 'react';
import Weather from './Weather';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function WeatherList(props){
  return(
    <div>
      {props.forecastList.map((forecast)=>{
        return <Weather forecast={forecast} key={v4()}/>
      })}
    </div>
  )
}

WeatherList.propTypes = {
  forecastList: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      date_epoch: PropTypes.number,
      day: PropTypes.objectOf(
        PropTypes.oneOfType[
          PropTypes.number,
          PropTypes.shape({
            text: PropTypes.string.isRequired,
            icon: PropTypes.string,
            code: PropTypes.number
          })
        ]
      ),
      astro: PropTypes.objectOf(PropTypes.string)
    })
  ).isRequired
}

export default WeatherList;
