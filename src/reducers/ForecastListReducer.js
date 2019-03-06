 function ForecastListReducer(initialState = {}, action) {
   let newState;
   switch (action.type) {
     case 'GET_FORECAST':
       newState = {...initialState, forecastWeek: action.forecastWeek}
       return newState;
     default:
       return initialState;
   }
 }

 export default ForecastListReducer;
