/* ============================================
   3D TRANSFORMS: Bill spin, car wheel rotation
   ============================================ */

export const init = () => {
    // Initialize bill spinning
    const bills = document.querySelectorAll('.bill');
    bills.forEach((bill, index) => {
        gsap.to(bill, {
            rotateY: 360,
            duration: 1.8,
            ease: 'linear',
            repeat: -1,
            delay: index * -0.36,
        });
    });

    // Initialize car wheel spinning
    const wheel = document.querySelector('.wheel');
    if (wheel) {
        gsap.to(wheel, {
            rotation: 360,
            duration: 4,
            ease: 'linear',
            repeat: -1,
        });
    }

    // Enable 3D perspective on containers
    const section = document.querySelector('.3d-section');
    if (section) {
        section.style.perspective = '1000px';
    }

    const billContainer = document.querySelector('.bill-container');
    if (billContainer) {
        billContainer.style.perspective = '1200px';
    }

    return {
        bills,
        wheel,
    };
};
