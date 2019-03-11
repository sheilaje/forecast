import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import middlewareLogger from './middleware/middleware-logger';
import ForecastListReducer from './reducers/ForecastListReducer';
import thunkMiddleware from 'redux-thunk';


const store = createStore(ForecastListReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  , document.getElementById('root'));

let unsubscribe = store.subscribe(()=>{
  console.log('subscription',store.getState());
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
