
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
    this.style.display = window.getComputedStyle(.menu--open).getPropertyValue('display');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', (event) => {
   toggleMenu();
})