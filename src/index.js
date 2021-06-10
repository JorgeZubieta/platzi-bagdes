import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge';

import "bootstrap-5.0.1-dist/css/bootstrap.css";

import "./global.css";


const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge
                    firstName="Jorge"
                    lastName="Zubieta"
                    avatarUrl="https://secure.gravatar.com/avatar/e369444fbda201a6d3fca939daec8ed8"
                    jobTitle="Frontend Developer"
                    // no agreggo el @ en Jorge Zubieta!
                    twitter="jorgezubieta"
                    />,
                    container);
