import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createForecastAction } from '../actions';


function InputForm ({dispatch}){
  
  let _city=null;
  
  function getForecast(event){
    event.preventDefault();
    let city=_city.value;
    dispatch(createForecastAction(city));
    }
  

    return(
      <div>
      <input type='text' id = 'city' ref={(input)=>{_city=input;}} placeholder="city" />
      <button type='button' onClick= {getForecast}>Get Forecast</button> 
      </div>
    );
}

InputForm.props = {
  dispatch:PropTypes.func
}

export default connect()(InputForm);