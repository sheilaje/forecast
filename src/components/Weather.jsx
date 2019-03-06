import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Weather(props){


  return (<div>
        <hr/>
    <h3>{props.forecast.forecastMoment.format('ddd')}</h3>
    {props.forecast.day.condition.text}
    <img src={props.forecast.day.condition.icon}
    />
  </div>)
}

Weather.propTypes = {
  forecast: PropTypes.shape({
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
}

export default Weather;
