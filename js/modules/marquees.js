/* ============================================
   MARQUEES: Infinite scroll text animation
   ============================================ */

export const init = () => {
    const marquees = document.querySelectorAll('.marquee');
    if (marquees.length === 0) return;

    marquees.forEach(marquee => {
        // Clone content for infinite loop
        const marqueeContent = marquee.innerHTML;
        marquee.innerHTML = marqueeContent + marqueeContent;

        // Reset animation on hover
        marquee.addEventListener('mouseenter', () => {
            marquee.style.animationPlayState = 'paused';
        });

        marquee.addEventListener('mouseleave', () => {
            marquee.style.animationPlayState = 'running';
        });
    });

    // Testimonial marquee specific handling
    const testimonialMarquee = document.querySelector('.testimonial-marquee');
    if (testimonialMarquee) {
        const items = testimonialMarquee.querySelectorAll('.testimonial-item');
        items.forEach(item => {
            item.addEventListener('mouseenter', () => {
                testimonialMarquee.style.animationPlayState = 'paused';
            });

            item.addEventListener('mouseleave', () => {
                testimonialMarquee.style.animationPlayState = 'running';
            });
        });
    }

    // Footer marquee
    const footerMarquee = document.querySelector('.footer-marquee-text');
    if (footerMarquee) {
        const content = footerMarquee.innerHTML;
        footerMarquee.innerHTML = content + ' • ' + content;
    }

    return {
        marquees,
    };
};
