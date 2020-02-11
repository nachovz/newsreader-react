import 'unfetch/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from 'router';
import * as serviceWorker from 'serviceWorker';
import 'normalize.css';
import 'fonts/Merriweather-Regular.ttf';
import 'styles/index.css';

ReactDOM.render(<MainRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
