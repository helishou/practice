import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {Provider} from 'react-redux'
ReactDOM.render(
  //此处用provider包裹app,让app后代容器组件都接受到store
  <Provider store={store}><App /></Provider>
    ,
  document.getElementById('root')
);

reportWebVitals();
