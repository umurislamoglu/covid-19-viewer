import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';

import configureStore from './../src/store/configureStore';
import { getCountriesFromApi } from './actions/covidDataActions';


const store = configureStore();

if(!store.countries){store.dispatch(getCountriesFromApi())}


  ReactDOM.render(

    <Provider store= {store}>
      <AppRouter />
    </Provider>
    
  ,
  document.getElementById('root')
);


  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
