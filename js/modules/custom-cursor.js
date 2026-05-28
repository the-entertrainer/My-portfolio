/* ============================================
   CUSTOM CURSOR: PNG follower with LERP smoothing
   ============================================ */

export const init = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) return;

    // Check if pointer: fine (desktop)
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let lastX = 0;
    let lastY = 0;

    const LERP_FACTOR = 0.12;

    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Hide cursor on certain elements
    document.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            cursor.style.opacity = '0';
        } else {
            cursor.style.opacity = '1';
        }
    });

    // Animation loop
    const updateCursor = () => {
        // LERP smoothing
        cursorX += (mouseX - cursorX) * LERP_FACTOR;
        cursorY += (mouseY - cursorY) * LERP_FACTOR;

        // Calculate rotation based on velocity
        const velocityX = cursorX - lastX;
        const velocityY = cursorY - lastY;
        const angle = Math.atan2(velocityY, velocityX) * (180 / Math.PI);

        // Apply transform
        cursor.style.transform = `translate(calc(-50% + ${cursorX}px), calc(-50% + ${cursorY}px)) rotate(${angle}deg)`;

        lastX = cursorX;
        lastY = cursorY;

        requestAnimationFrame(updateCursor);
    };

    updateCursor();

    // Hide system cursor
    document.body.style.cursor = 'none';

    return {
        cursor,
        isDesktop,
    };
};
