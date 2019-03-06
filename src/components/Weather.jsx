import React from 'react';
import PropTypes from 'prop-types';

function Weather(props){
  return (<div>
    {props.forecast.day.condition.text}
  </div>)
}

Weather.propTypes = {
  forecast: PropTypes.shape({
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
}

export default Weather;
