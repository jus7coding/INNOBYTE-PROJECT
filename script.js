let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const maxSlides = slides.length;

function moveSlide(direction) {
    currentSlide = currentSlide + direction;
    
    // Loop back to first/last slide
    if (currentSlide >= maxSlides) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = maxSlides - 1;
    }
    
    // Move the slider
    document.querySelector('.slider-track').style.transform = 
        `translateX(-${currentSlide * 100}%)`;
}

// Auto advance slides every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-container')) {
            navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});
