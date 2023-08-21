import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//由于移动端开发，窗口大小可能不一致，所以需要设置移动端适配
//除以多少视口宽度就是多少rem,现在我们设置的视口总宽度为750rem
document.documentElement.style.fontSize = 100 / 750 +'vw';

const root = ReactDOM.createRoot(document.getElementById('root'));/*  */
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode> 
);

