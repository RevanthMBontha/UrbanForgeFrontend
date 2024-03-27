import { homePageLogic } from './pageLogics/homePage.js';
import { addNavbar } from './common/addNavbar.js';
import { addFooter } from './common/addFooter.js';

// Initialising tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Getting the path for the present page
const path = window.location.pathname;
const pathArray = path.split('/');
const pageName = pathArray[pathArray.length - 1].split('.')[0];

// Adding NavBar to all pages
addNavbar();

// Logic for 'Home Page'
if (pageName === 'index') {
  homePageLogic();
}

// Logic for Contact Us Page
if (pageName === 'contact_us') {
  const activeElement = document.getElementById('contact_us');
  activeElement.classList.add('active');
}

addFooter();
