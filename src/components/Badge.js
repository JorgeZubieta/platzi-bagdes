import React from 'react';

import conflogo from '../images/badge-header.svg';

import "./styles/Badge.css";

// las clases son componentens entonces la  clase badge extiende a la clase react.component
class Badge extends React.Component {
    render() {
        return (
        <div className ="Badge" >
            <div className ="Badge__header">
                <img src ={conflogo} alt="logo de la conferencia"/>
            </div>

            <div className="Badge__section-name">
                <img className="Badge__avatar" src="https://secure.gravatar.com/avatar/e369444fbda201a6d3fca939daec8ed8" alt="Gravatar"/>
                <h1>Jorge <br/> Zubieta</h1>
            </div>

            <div className="Badge__section-info">
                <p>Frontend Developer</p>
                <p>@jorgezubieta</p>
            </div>

            <div className="Badge__footer">
                #platziconf
            </div>
        </div>
        )
    } 
}
// Como etamos en un arochivo debemos exportar este componente!
export default Badge; 