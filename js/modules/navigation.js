/* ============================================
   NAVIGATION: Scroll state, logo swap, hamburger
   ============================================ */

export const init = () => {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLogo = document.querySelector('.logo');

    if (!nav) return;

    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            if (navMenu) {
                navMenu.classList.toggle('active');
            }

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!nav.contains(e.target)) {
                    hamburger.classList.remove('active');
                    if (navMenu) {
                        navMenu.classList.remove('active');
                    }
                }
            });
        });
    }

    // Close menu when clicking nav links
    if (navMenu) {
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger?.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Logo interaction (swap on click)
    if (navLogo) {
        navLogo.addEventListener('click', () => {
            const isMain = navLogo.classList.contains('main');
            navLogo.classList.toggle('cute');

            // Log interaction
            console.log('Logo clicked:', isMain ? 'main → cute' : 'cute → main');
        });
    }

    // Scroll state is handled by main.js
    // Navigation bar styling for scrolled state is in CSS

    return {
        nav,
        hamburger,
        navLogo,
    };
};
