
import ForecastListReducer from './../../src/reducers/ForecastListReducer';


describe('ForecastApp', () => {


  describe('ForecastListReducer', () => {
    it('return input state if we give it type null', () => {
      expect(ForecastListReducer(initialState, {type: null})).toEqual(initialState.forecastWeek);
    });
  });


});
