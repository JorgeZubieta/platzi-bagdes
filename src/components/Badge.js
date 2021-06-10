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
                <img className="Badge__avatar" src={this.props.avatarUrl} alt="Gravatar"/>
                <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
            </div>

            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                {/* dejo el @fuera de los brakets */}
                <div>@{this.props.twitter}</div>
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