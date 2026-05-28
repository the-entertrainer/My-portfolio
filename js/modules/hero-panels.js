/* ============================================
   HERO PANELS: Clip-path reveal animation
   ============================================ */

export const init = () => {
    const heroPanels = document.querySelectorAll('.hero-panel');
    if (heroPanels.length === 0) return;

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            start: 'top center',
            end: 'center center',
            scrub: 0.5,
            markers: false,
        },
    });

    // Animate each panel with staggered delay
    heroPanels.forEach((panel, index) => {
        timeline.to(
            panel,
            {
                clipPath: 'inset(0 0% 0 0)',
                duration: 1.2,
                ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
            },
            index * 0.08
        );
    });

    // Animate logo fade (main text in first panel)
    const heroLogo = document.querySelector('.hero-logo');
    if (heroLogo) {
        gsap.to(heroLogo, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.inOut',
            delay: 1.5,
        });
    }

    return {
        timeline,
        heroPanels,
    };
};
