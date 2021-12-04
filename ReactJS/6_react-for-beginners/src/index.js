import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import "./style.css";
// 우리가 아는 방식인 css파일을 만들고 임포트하는 식으로 만들어도 됨!
// 또다른 방식으로는 그냥 javascript상으로 style을 넣는 방식!

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
