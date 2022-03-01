import _ from 'lodash';
import './style.css';

function component() {
    const element = document.querySelector('#content');
    const btn = document.createElement('button');

    element.innerHTML = '<h1 class="hello">Welcome to The Eatery</h1>';

    btn.innerHTML = 'Enter';

    element.appendChild(btn);

   return element;
}

document.body.appendChild(component());