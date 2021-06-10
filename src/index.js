import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge';

import "bootstrap-5.0.1-dist/css/bootstrap.css";

import "./global.css";


const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge />, container);
