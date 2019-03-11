import React, { Component } from 'react';
import { createForecastAction } from '../actions';
import ForecastListReducer from '../reducers';
import { connect } from 'react-redux';
import WeatherList from './WeatherList';
import './assets/styles/styles.css';
import InputForm from './InputForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
    // this.getForecast = this.getForecast.bind(this);
  }

  // getForecast(){
  //   const { dispatch } = this.props;
  //   let forecastPromise = createForecastAction();
  //   forecastPromise.then((getForecastAction)=>{
  //     return dispatch(getForecastAction);
  //   })
  // }

  render() {
    if(!this.props.forecastWeek){
      return (
        <div>
        <InputForm />
          
        </div>
      )
    } else {
      return (
        <div>
          <InputForm />
          <WeatherList  forecastList = {this.props.forecastWeek}/>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    forecastWeek: state.forecastWeek
  }
}

export default connect(mapStateToProps)(App);
