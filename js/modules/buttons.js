/* ============================================
   BUTTONS: Click handlers, random text cycling
   ============================================ */

export const init = () => {
    const clickButtons = document.querySelectorAll('.click-button');
    if (clickButtons.length === 0) return;

    const buttonTexts = [
        'Click me again',
        'Nice try',
        'Keep going',
        'Almost there',
        'You\'re persistent',
        'This is fun',
        'One more time',
        'I like you',
        'You\'re amazing',
        'We should be friends',
    ];

    clickButtons.forEach(button => {
        let clickCount = 0;
        let lastText = '';

        const counter = button.querySelector('.button-counter');

        button.addEventListener('click', () => {
            clickCount++;

            // Update counter if exists
            if (counter) {
                counter.textContent = `Clicks: ${clickCount}`;
            }

            // Random text cycling (prevent repeats)
            let randomText;
            do {
                randomText = buttonTexts[Math.floor(Math.random() * buttonTexts.length)];
            } while (randomText === lastText && buttonTexts.length > 1);

            lastText = randomText;

            // Animate button on click
            gsap.to(button, {
                scale: 0.95,
                duration: 0.1,
                ease: 'power2.out',
            });

            gsap.to(button, {
                scale: 1,
                duration: 0.2,
                delay: 0.1,
                ease: 'elastic.out',
            });

            // Show random text
            if (button.textContent.includes('Click')) {
                button.textContent = randomText;
                gsap.from(button, {
                    opacity: 0,
                    duration: 0.3,
                    delay: 0.1,
                });
            }
        });

        // Hover effects
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out',
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
            });
        });
    });

    return {
        clickButtons,
    };
};
