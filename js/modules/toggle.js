/* ============================================
   TOGGLE: Love/hate face swap with elastic easing
   ============================================ */

export const init = () => {
    const toggleContainers = document.querySelectorAll('.toggle-container');
    if (toggleContainers.length === 0) return;

    toggleContainers.forEach(container => {
        const face = container.querySelector('.toggle-face');
        const label = container.querySelector('.toggle-label');

        if (!face) return;

        let state = 'love';
        const faces = {
            love: '😍',
            hate: '😤',
        };

        const labels = {
            love: 'Love it',
            hate: 'Hate it',
        };

        face.addEventListener('click', () => {
            // Toggle state
            state = state === 'love' ? 'hate' : 'love';

            // Animate flip
            gsap.timeline()
                .to(face, {
                    rotateX: 90,
                    duration: 0.3,
                    ease: 'power2.inOut',
                })
                .call(() => {
                    face.textContent = faces[state];
                    if (label) {
                        label.textContent = labels[state];
                    }
                    face.setAttribute('data-state', state);
                })
                .to(face, {
                    rotateX: 0,
                    duration: 0.3,
                    ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                });

            // Log interaction
            console.log(`Toggle changed to: ${state}`);
        });

        // Hover effects
        face.addEventListener('mouseenter', () => {
            gsap.to(face, {
                scale: 1.15,
                duration: 0.3,
                ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            });
        });

        face.addEventListener('mouseleave', () => {
            gsap.to(face, {
                scale: 1,
                duration: 0.3,
                ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            });
        });
    });

    return {
        toggleContainers,
    };
};
