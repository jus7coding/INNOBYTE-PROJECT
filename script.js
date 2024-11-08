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
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if(mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            // Toggle menu icon
            const menuIcon = this.querySelector('i');
            if(menuIcon) {
                menuIcon.classList.toggle('ri-menu-line');
                menuIcon.classList.toggle('ri-close-line');
            }
        });

        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
                // Reset menu icon
                const menuIcon = mobileMenuBtn.querySelector('i');
                if(menuIcon) {
                    menuIcon.classList.add('ri-menu-line');
                    menuIcon.classList.remove('ri-close-line');
                }
            });
        });
    }
});

