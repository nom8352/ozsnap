// ========================================
// OZSNAP - Modern Photography Website
// JavaScript - Navigation & Interactions
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // ---------- Page Navigation ----------
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('[data-page]');

    function showPage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active', 'fade-in');
        });

        // Show target page
        const target = document.getElementById(`page-${pageId}`);
        if (target) {
            target.classList.add('active');
            // Trigger fade-in after a tiny delay
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    target.classList.add('fade-in');
                });
            });
        }

        // Update nav active state
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Close mobile menu
        const navLinksContainer = document.getElementById('nav-links');
        const menuToggle = document.getElementById('menu-toggle');
        navLinksContainer.classList.remove('open');
        menuToggle.classList.remove('active');

        // Re-trigger scroll animations
        setTimeout(() => {
            initScrollAnimations();
        }, 100);
    }

    // Attach click handlers to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // ---------- Mobile Menu Toggle ----------
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });

    // ---------- Navbar Scroll Effect ----------
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ---------- Scroll Animations ----------
    function initScrollAnimations() {
        const elements = document.querySelectorAll('[data-aos]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => {
            // Reset visibility for re-triggering
            el.classList.remove('visible');
            observer.observe(el);
        });
    }

    initScrollAnimations();

    // ---------- Contact Form ----------
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.btn');
            const originalText = btn.textContent;
            btn.textContent = 'Message Sent!';
            btn.style.background = 'linear-gradient(135deg, #00cec9, #55efc4)';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                contactForm.reset();
            }, 3000);
        });
    }

    // ---------- Filter Buttons ----------
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // ---------- Initialize home page ----------
    const homePage = document.getElementById('page-home');
    if (homePage) {
        homePage.classList.add('fade-in');
    }
});
