]/**
 * Mannem Saiteja - Portfolio Scroll Reveal Script
 * Uses IntersectionObserver for smooth performance
 */
document.addEventListener("DOMContentLoaded", () => {
    // Select all sections and elements configured for scroll-triggered animation
    const animatedElements = document.querySelectorAll(".scroll-reveal, .card, .passion-card, .skill, .contact-box");

    // Add the structural transition animation settings to all target elements
    animatedElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(40px) scale(0.96)";
        element.style.transition = "opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
    });

    // Configuration settings for viewport detection
    const observerOptions = {
        root: null, // Uses the browser viewport
        rootMargin: "0px 0px -80px 0px", // Triggers slightly before the element hits full view
        threshold: 0.12 // Requires 12% of the card to be visible before showing up
    };

    // Callback execution framework when elements intersect viewport metrics
    const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Introduce a tiny staggered delay for grid layouts so cards pop up one after another
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0) scale(1)";
                }, index * 60);

                // Stop tracking the element once it has successfully animated into position
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Bind all selected elements to the active listener ring
    animatedElements.forEach(element => {
        intersectionObserver.observe(element);
    });
});
