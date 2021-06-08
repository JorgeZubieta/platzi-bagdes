// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement(
//     'a',
//     { href: 'https://www.platzi.com' },
//     'Ir a platzi'
//     );
const name = ' Jorge Zubieta';
// const element = React.createElement('h1',{},`Mi nombre es ${name}`)
// las comillas del tercer argumento debenn ser diagonal ivertidas y el simbolo de $!


// Ahora lo hacemos sin jsx lo cual es mas trabajoso y no expresivo ni calro!!!
// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {},`Hola soy Kaito`),
//     React.createElement('p', {}, `Soy hijo de Jorge Zubieta`)
// );

// ahora lo hacemos con Jsx
const jsx = (
    <div>
        <h1>Hola soy, {name}</h1>
        <p>Soy Frontend Developer</p>
    </div>
)

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(jsx, container);
