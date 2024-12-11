// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.error(`Target not found: ${this.getAttribute('href')}`);
        }
    });
});

// Form Validation for Quote Form
const quoteForm = document.querySelector('.quote-form');
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        const fromField = quoteForm.querySelector('input[name="from"]');
        const toField = quoteForm.querySelector('input[name="to"]');
        const dateField = quoteForm.querySelector('input[name="date"]');

        if (!fromField.value || !toField.value || !dateField.value) {
            e.preventDefault();
            alert('Please fill out all required fields in the quote form.');
        }
    });
}

// Form Validation for Contact Form
const contactForm = document.querySelector('form[action="submit_form.php"]');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const nameField = contactForm.querySelector('input[name="name"]');
        const emailField = contactForm.querySelector('input[name="email"]');
        const messageField = contactForm.querySelector('textarea[name="message"]');

        if (!nameField.value || !emailField.value || !messageField.value) {
            e.preventDefault();
            alert('Please fill out all required fields in the contact form.');
        }
    });
}

// Dynamic Year Update in Footer
const yearElement = document.querySelector('.footer p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = yearElement.innerHTML.replace(/\d{4}/, currentYear);
}

// Script for Managing Header Visibility and Sticky Class
let lastScrollPosition = 0;
const header = document.querySelector('header');
if (header) {
    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.scrollY;

        // Hide header on scroll down, show on scroll up
        header.classList.toggle('hidden-header', currentScrollPosition > lastScrollPosition && currentScrollPosition > 100);

        // Add sticky class
        header.classList.toggle('scale-header', currentScrollPosition > 50);

        lastScrollPosition = currentScrollPosition;
    });
}

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('active');
    });
}

// Back-to-Top Button Functionality
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Page-Specific Adjustments for Header Height
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname; // Get the current page path (e.g., '/index.html')

    let firstSection; // Declare a variable to store the first content section for adjustment

    // Detect the page and select the appropriate first section
    if (currentPath.includes('index.html') || currentPath === '/') {
        firstSection = document.querySelector('.hero'); // Hero section on the index page
    } else if (currentPath.includes('services.html')) {
        firstSection = document.querySelector('.services'); // Services section
    } else if (currentPath.includes('contact.html')) {
        firstSection = document.querySelector('.contact'); // Contact section
    } else if (currentPath.includes('blog.html')) {
        firstSection = document.querySelector('.blog-preview'); // Blog section
    } else if (currentPath.includes('reviews.html')) {
        firstSection = document.querySelector('.testimonials'); // Testimonials section
    }

    // Apply the header height adjustment if the header and first section are found
    if (header && firstSection) {
        const headerHeight = header.offsetHeight;
        firstSection.style.marginTop = `${headerHeight}px`;
    } else if (!firstSection) {
        console.warn('No specific adjustments for this page. Applying default.');
        firstSection = document.querySelector('main'); // Default to the <main> element
        if (header && firstSection) {
            const headerHeight = header.offsetHeight;
            firstSection.style.marginTop = `${headerHeight}px`;
        }
    } else {
        console.warn('Header or first section not found for:', currentPath);
    }
});
