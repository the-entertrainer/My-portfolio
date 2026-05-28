/* ============================================
   MAIN: Initialization and module loader
   ============================================ */

// Lenis smooth scroll setup
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Update Lenis on ScrollTrigger refresh
ScrollTrigger.addEventListener('refresh', () => lenis.resize());
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Global state object
const state = {
    isLoaded: false,
    isScrolled: false,
    scrollVelocity: 0,
    scrollY: 0,
};

// Track scroll position and velocity
let lastScrollY = 0;
let scrollDelta = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    scrollDelta = currentScrollY - lastScrollY;
    state.scrollVelocity = Math.abs(scrollDelta);
    state.scrollY = currentScrollY;

    if (currentScrollY > 80) {
        if (!state.isScrolled) {
            state.isScrolled = true;
            document.documentElement.classList.add('is-scrolled');
        }
    } else {
        if (state.isScrolled) {
            state.isScrolled = false;
            document.documentElement.classList.remove('is-scrolled');
        }
    }

    lastScrollY = currentScrollY;
}, false);

// Module initialization order
const initModules = async () => {
    try {
        // Core modules (order matters)
        await import('./modules/preloader.js').then(m => m.init());
        await import('./modules/navigation.js').then(m => m.init());
        await import('./modules/hero-panels.js').then(m => m.init());
        await import('./modules/scroll-velocity.js').then(m => m.init());

        // Animation modules
        await import('./modules/marquees.js').then(m => m.init());
        await import('./modules/icon-belt.js').then(m => m.init());
        await import('./modules/word-reveals.js').then(m => m.init());
        await import('./modules/video-sections.js').then(m => m.init());

        // Interactive modules
        await import('./modules/buttons.js').then(m => m.init());
        await import('./modules/toggle.js').then(m => m.init());
        await import('./modules/3d-transforms.js').then(m => m.init());

        // UI modules
        await import('./modules/custom-cursor.js').then(m => m.init());

        // Optional transitions module
        // await import('./modules/transitions.js').then(m => m.init());

        state.isLoaded = true;
        document.documentElement.classList.add('is-loaded');

        console.log('✓ Portfolio initialized successfully');
    } catch (error) {
        console.error('✗ Failed to initialize portfolio:', error);
    }
};

// Start initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModules);
} else {
    initModules();
}

// Expose state globally for module access
window.portfolioState = state;

// Debug mode (set to true for console logging)
window.DEBUG = false;

const debug = (label, value) => {
    if (window.DEBUG) console.log(`[${label}]`, value);
};

// Export utilities
export { debug, lenis };
