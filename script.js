window.addEventListener('load', () => {

    const reset = false;
    let sr = ScrollReveal({
        origin: 'bottom',
        distance: '30px',
        duration: 1500,
        reset
    });

    sr.reveal('h1, h2, span, section p, img, lottie-player, a, video, .cards', { delay: 100, interval: 100 });

    sr = ScrollReveal({
        origin: 'left',
        distance: '30px',
        duration: 1500,
        reset
    });
    sr.reveal('#home img, #intro h1, #intro p', { delay: 200 });
});