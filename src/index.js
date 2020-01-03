import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App';

import 'jquery';
import 'popper.js';
import 'bootstrap';

ReactDOM.render(<App visibleBoard={"d-none"} visibleForm={""}/>, document.getElementById('root'));

