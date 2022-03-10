import _ from 'lodash';
import './style.css';
// import landingComponent from './home';
import contactComponent from './contact';
// import menuPageComponent from './menu';

function component() {
    
   // return landingComponent();
   return contactComponent();
   // return menuPageComponent();
}

document.body.appendChild(component());