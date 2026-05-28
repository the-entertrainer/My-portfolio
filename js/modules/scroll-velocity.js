/* ============================================
   SCROLL VELOCITY: Track scroll speed for coupling
   ============================================ */

export const init = () => {
    let lastTime = Date.now();
    let lastScrollY = 0;

    const updateVelocity = () => {
        const currentTime = Date.now();
        const currentScrollY = window.scrollY;

        const timeDelta = Math.max(currentTime - lastTime, 1);
        const distanceDelta = Math.abs(currentScrollY - lastScrollY);

        // Velocity in pixels per millisecond
        const velocity = distanceDelta / timeDelta;

        // Clamp velocity between 0 and 1
        const clampedVelocity = Math.min(velocity, 1);

        // Update global state
        if (window.portfolioState) {
            window.portfolioState.scrollVelocity = clampedVelocity;
        }

        // Update for wheel spin (range 0.8s to 4s)
        const wheelDuration = Math.max(0.8, 4 - clampedVelocity * 0.1);
        updateWheelSpeed(wheelDuration);

        // Update for marquee speed (factor 0.3 to 1)
        const marqueeFactor = Math.max(0.3, 1 - clampedVelocity * 0.02);
        updateMarqueeSpeed(marqueeFactor);

        lastTime = currentTime;
        lastScrollY = currentScrollY;
    };

    // Listen for scroll events
    window.addEventListener('scroll', updateVelocity, false);

    // RAF update for smooth animation coupling
    const rafUpdate = () => {
        updateVelocity();
        requestAnimationFrame(rafUpdate);
    };

    requestAnimationFrame(rafUpdate);

    return {
        getVelocity: () => window.portfolioState?.scrollVelocity || 0,
    };
};

const updateWheelSpeed = (duration) => {
    const wheel = document.querySelector('.wheel');
    if (wheel) {
        wheel.style.animationDuration = `${duration}s`;
    }
};

const updateMarqueeSpeed = (factor) => {
    const marquees = document.querySelectorAll('.marquee');
    marquees.forEach(marquee => {
        const baseTime = 22; // base duration in seconds
        const newDuration = baseTime / factor;
        marquee.style.animationDuration = `${newDuration}s`;
    });
};
