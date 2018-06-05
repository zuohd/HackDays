import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import ClickCounter from './ClickCounter';
import registerServiceWorker from './registerServiceWorker';
//#var element=React.createElement('h1',{className:'greetings'},'Hello, Soderberg!');
ReactDOM.render(<ClickCounter />, document.getElementById('root'));
registerServiceWorker();
