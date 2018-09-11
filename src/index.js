import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Database from './Store';

ReactDOM.render(
<Database>
  <App />
</Database>
, document.getElementById('root'));
registerServiceWorker();
