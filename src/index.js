import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import thunkMiddleware from 'react-redux';
import ForecastListReducer from './reducers/ForecastListReducer';

const store = createStore(ForecastListReducer);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  , document.getElementById('root'));

let unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
