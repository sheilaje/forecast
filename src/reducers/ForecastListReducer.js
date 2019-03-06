import Moment from 'moment';

function ForecastListReducer(initialState = {}, action) {
  let newState;
  switch (action.type) {
    case 'GET_FORECAST':
    const newForecastWeek = action.forecastWeek.map(function(forecast) {
      let forecastMoment = new Moment(forecast.date)
      return {...forecast, forecastMoment: forecastMoment}
    })
    newState = {...initialState, forecastWeek: newForecastWeek}
      return newState;
    default:
      return initialState;
  }
}

export default ForecastListReducer;
