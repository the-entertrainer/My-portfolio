/* ============================================
   TRANSITIONS: Barba.js page transitions (optional)
   ============================================ */

export const init = () => {
    // Barba.js optional integration
    // Uncomment if using multi-page setup with pages/ directory

    /*
    if (typeof Barba === 'undefined') {
        console.warn('Barba.js not loaded');
        return;
    }

    Barba.Pjax.start();

    const FadeTransition = Barba.BaseTransition.extend({
        start: function() {
            Promise.all([this.newContainerLoading, this.fadeOut()]).then(
                this.fadeIn.bind(this)
            );
        },

        fadeOut: function() {
            return gsap.to(this.oldContainer, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut',
            });
        },

        fadeIn: function() {
            const self = this;
            this.newContainer.style.opacity = 0;

            gsap.to(this.newContainer, {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.inOut',
                onComplete: function() {
                    self.done();
                },
            });
        },
    });

    Barba.Transition = FadeTransition;
    */

    return {
        enabled: false,
    };
};
