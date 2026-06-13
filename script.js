// Initialize ScrollReveal Configuration Engine with standard properties
const scrollEngine = ScrollReveal({
    distance: '40px',
    duration: 900,
    delay: 100,
    reset: true // Forces elements to slide back smoothly when scrolling across section nodes
});

// Structural Targeting Binding Rulesets
scrollEngine.reveal('.reveal-left', { origin: 'left' });
scrollEngine.reveal('.reveal-right', { origin: 'right' });
scrollEngine.reveal('.reveal-bottom', { origin: 'bottom' });

