/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll(".landing__container");
const navbarList = document.querySelector("#navbar__list")

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function addItemsToNav(sections, navbarList){
    for(const section of sections) {
        const liElement = document.createElement("li");
        liElement.className = "menu__link";
        liElement.textContent = section.querySelector("h2").textContent;
        navbarList.appendChild(liElement);
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
    addItemsToNav(sections,navbarList);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


