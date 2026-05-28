/* ============================================
   PRELOADER: 6-bomb floating grid animation
   ============================================ */

export const init = () => {
    const preloader = document.querySelector('.preloader');
    if (!preloader) return;

    const bombs = preloader.querySelectorAll('.preloader-bomb');
    if (bombs.length === 0) return;

    // Create GSAP timeline for preloader exit
    const timeline = gsap.timeline();

    // Initial animation (already controlled by CSS)
    // Exit animation after 2.4s
    timeline.to(preloader, {
        duration: 0.9,
        opacity: 0,
        visibility: 'hidden',
        ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
        delay: 2.4,
    }, 0);

    // Hide main content initially, show after preloader
    const main = document.querySelector('main') || document.body;
    timeline.set(main, { visibility: 'visible' }, 0);

    return {
        timeline,
    };
};
