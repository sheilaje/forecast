import React from 'react';
import Weather from './Weather';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import Moment from 'moment';

function WeatherList(props){

  const divStyle = {
    display: 'flex',
    flexWrap: 'wrap',
  }

  return(
    <div style={divStyle}>
      {props.forecastList.map((forecast)=>{
        return <Weather forecast={forecast} key={v4()}/>
      })}
    </div>
  )
}

WeatherList.propTypes = {
  forecastList: PropTypes.arrayOf(
    PropTypes.shape({
      forecastMoment: PropTypes.instanceOf(Moment).isRequired,
      date: PropTypes.string,
      date_epoch: PropTypes.number,
      day: PropTypes.shape({
        condition: PropTypes.shape({
          text: PropTypes.string.isRequired,
          icon: PropTypes.string,
          code: PropTypes.number
        }).isRequired
      }),
      astro: PropTypes.objectOf(PropTypes.string)
    })
  ).isRequired
}

export default WeatherList;
