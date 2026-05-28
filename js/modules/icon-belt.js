/* ============================================
   ICON BELT: Multi-row conveyor animation
   ============================================ */

export const init = () => {
    const iconBelt = document.querySelector('.icon-belt');
    if (!iconBelt) return;

    const iconRows = iconBelt.querySelectorAll('.icon-row');
    if (iconRows.length === 0) return;

    iconRows.forEach((row, rowIndex) => {
        // Clone items for infinite scroll
        const content = row.innerHTML;
        row.innerHTML = content + content;

        // Set animation speeds per row
        const speeds = ['18s', '24s', '30s'];
        const speed = speeds[rowIndex % speeds.length];
        row.style.animationDuration = speed;

        // Reveal icons on scroll
        const icons = row.querySelectorAll('.icon-item');
        icons.forEach((icon, iconIndex) => {
            gsap.to(icon, {
                opacity: 1,
                y: 0,
                rotation: 0,
                duration: 0.7,
                ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                delay: iconIndex * 0.12,
                scrollTrigger: {
                    trigger: iconBelt,
                    start: 'top center',
                    end: 'center center',
                    scrub: 0.5,
                    markers: false,
                },
            });
        });
    });

    return {
        iconBelt,
        iconRows,
    };
};
