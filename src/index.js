import _, { over } from 'lodash';
import './style.css';
import menuPageComponent from './components/menu';
import contactComponent from './components/contact';
import footer from './components/footer';
import header from './components/header';
import overlay from './components/overlay';
import landingComponent from './components/home';

function component() {

   // const content = document.getElementById('content');

   // content.appendChild(header());
   // content.appendChild(overlay());
   // content.appendChild(landingComponent());
   // content.appendChild(footer());


   const pHeader = header();
   const pOverlay = overlay();
   // const landingPage = landingComponent();
   // const menuPage = menuPageComponent();
   // const contactPage = contactComponent();
   const pFooter = footer(); 

   return pHeader && pOverlay && landingPage && pFooter;
}

document.body.appendChild(component());