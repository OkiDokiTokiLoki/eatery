import _ from 'lodash';
import './style.css';
import './homeStyle.css';
import landingComponent from './home';

function component() {
    
   return landingComponent();
}

document.body.appendChild(component());