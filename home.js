// Toggle mobile menu visibility
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

// Open menu when hamburger button is clicked
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('show');
    menuBtn.classList.add('hidden-menu-btn');  // Hide the hamburger icon
});

// Close menu when exit button is clicked
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    menuBtn.classList.remove('hidden-menu-btn'); // Show the hamburger icon
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300); // delay to let the animation finish
});


