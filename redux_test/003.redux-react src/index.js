import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
//检测redux 状态的改变,如redux状态改变,则重新渲染
store.subscribe(()=>{
  ReactDOM.render(
    <App />,
  document.getElementById('root')
)
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
