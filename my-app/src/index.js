import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


import App from './App';
import TicTacToe from './TicTacToe/TicTacToe';

ReactDOM.render(<TicTacToe />, document.getElementById('root'));
registerServiceWorker();
