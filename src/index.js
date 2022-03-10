import _, { over } from 'lodash';
import './style.css';
import './styles/homeStyle.css';
import firstLoad from './functions/initial';
import render from './functions/render';
import landingComponent from './components/home';
import menuPageComponent from './components/menu';
import contactComponent from './components/contact';


firstLoad();

const homeBtn = document.querySelector('.logo-link');
const menuBtn = document.querySelector('.menuBtn');
const contactBtn = document.querySelector('.contactBtn');

homeBtn.addEventListener('click', () => {
   render();
   landingComponent();
});

menuBtn.addEventListener('click', () => {
   render();
   menuPageComponent();
});

contactBtn.addEventListener('click', () => {
   render();
   contactComponent();
});

// function component() {

//    const pHeader = header();
//    const pOverlay = overlay();
//    const landingPage = landingComponent();
//    const menuPage = menuPageComponent();
//    const contactPage = contactComponent();
//    const pFooter = footer(); 

//    return pHeader && menuPage && pFooter;
// }

// document.body.appendChild(component());