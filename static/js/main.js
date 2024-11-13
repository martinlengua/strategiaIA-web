document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Dynamic background color change on scroll
    let lastScrollTop = 0;
    const darkModeThreshold = 300; // Scroll threshold for dark mode

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar background change
        if (currentScroll > 50) {
            navbar.style.background = currentScroll > darkModeThreshold ? 
                'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }

        // Body background color change
        if (currentScroll > darkModeThreshold) {
            document.body.classList.add('dark-mode');
            // Adjust navbar links color for dark mode
            document.querySelectorAll('.nav-link').forEach(link => {
                link.style.color = '#fff';
            });
        } else {
            document.body.classList.remove('dark-mode');
            // Reset navbar links color
            document.querySelectorAll('.nav-link').forEach(link => {
                link.style.color = '';
            });
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            
            fetch('/submit_contact', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    alert('Thank you for your message. We will contact you soon!');
                    contactForm.reset();
                } else {
                    alert('There was an error sending your message. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again.');
            });
        });
    }

    // Add animation classes to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .section-title, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check for elements in view
});
