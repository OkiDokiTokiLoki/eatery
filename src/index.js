import _ from 'lodash';
import './style.css';
// import landingComponent from './home';
import contactComponent from './contact';

function component() {
    
   // return landingComponent();
   return contactComponent();
}

document.body.appendChild(component());