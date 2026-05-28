/* ============================================
   WORD REVEALS: Splitting.js integration
   ============================================ */

export const init = () => {
    // Check if Splitting.js is loaded
    if (typeof Splitting === 'undefined') {
        console.warn('Splitting.js not loaded');
        return;
    }

    const wordRevealSections = document.querySelectorAll('.word-reveal-text');
    if (wordRevealSections.length === 0) return;

    wordRevealSections.forEach(section => {
        // Use Splitting.js to split text into words
        const split = Splitting({
            target: section,
            by: 'words',
        });

        // Animate each word on scroll
        const words = section.querySelectorAll('.word');
        words.forEach((word, index) => {
            gsap.from(word, {
                opacity: 0,
                y: 40,
                duration: 0.7,
                ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
                delay: index * 0.09,
                scrollTrigger: {
                    trigger: section,
                    start: 'top center',
                    end: 'center center',
                    scrub: 0.5,
                    markers: false,
                },
            });
        });
    });

    return {
        wordRevealSections,
    };
};
