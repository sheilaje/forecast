import constants from './../../src/constants';
import ForecastListReducer from './../../src/reducers/ForecastListReducer';
import * as actions from './../../src/actions';
import { createStore } from 'redux';

describe('ForecastApp', () => {
  // const { initialState, types } = constants;
  const store = createStore(ForecastListReducer, initialState);

  describe('ForecastListReducer', () => {
    it('return input state if we give it type null', () => {
      expect(ForecastListReducer(initialState, {type: null})).toEqual(initialState.forecastWeek);
    });
  });


});
