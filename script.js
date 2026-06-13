// Initialize ScrollReveal Configuration Engine
const scrollEngine = ScrollReveal({
    distance: '50px',
    duration: 1000,
    delay: 150,
    reset: true // Loops animation sequence steps when scrolling up or down actively
});

// Structural Targeting Binding Declarations
scrollEngine.reveal('.reveal-left', { origin: 'left' });
scrollEngine.reveal('.reveal-right', { origin: 'right' });
scrollEngine.reveal('.reveal-bottom', { origin: 'bottom' });

