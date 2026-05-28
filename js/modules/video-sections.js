/* ============================================
   VIDEO SECTIONS: Parallax, lazy loading, overlays
   ============================================ */

export const init = () => {
    const videoSections = document.querySelectorAll('.video-section');
    if (videoSections.length === 0) return;

    videoSections.forEach(section => {
        const videoBg = section.querySelector('.video-bg');
        const overlay = section.querySelector('.video-overlay');

        if (videoBg) {
            // Parallax animation for video background
            gsap.to(videoBg, {
                yPercent: 12,
                duration: 1.5,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5,
                    markers: false,
                },
            });
        }

        // Control overlay opacity via data attribute
        if (overlay) {
            const opacityValue = parseFloat(overlay.parentElement.getAttribute('data-overlay')) || 0.55;
            overlay.style.backgroundColor = `rgba(5, 5, 5, ${opacityValue})`;
        }

        // Lazy load video iframes
        const iframes = section.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Load iframe on intersection
                        if (iframe.getAttribute('data-src')) {
                            iframe.src = iframe.getAttribute('data-src');
                            iframe.removeAttribute('data-src');
                        }
                        observer.unobserve(iframe);
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(iframe);
        });

        // Animate text content on scroll
        const textContent = section.querySelector('.video-text');
        if (textContent) {
            gsap.from(textContent, {
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
                ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
                scrollTrigger: {
                    trigger: section,
                    start: 'top center',
                    end: 'center center',
                    scrub: 0.5,
                    markers: false,
                },
            });
        }
    });

    return {
        videoSections,
    };
};
