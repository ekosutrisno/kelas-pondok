// Create a new ScrollMagic controller
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: '#trigger-beranda',
    duration: 400
})
    .setTween(TweenMax.from('#target-beranda', 1, { opacity: 0, scale: 0.80 }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#trigger-profile',
    duration: 400
})
    .setTween(TweenMax.from('#target-profile', { y: '50%', x: '5%', ease: Linear.easeNone }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#trigger-bacaanku',
    duration: 400
})
    .setTween(gsap.from('#target-bacaanku', 1, { opacity: 0 }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#trigger-surat',
    duration: 400
})
    .setTween(TweenMax.from('#target-surat', 1, { opacity: 0, scale: 0.5 }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#trigger-kelas',
    duration: 400
})
    .setTween(TweenMax.from('#target-kelas', { y: '25%', x: '-5%', ease: Linear.easeNone }))
    .addTo(controller);

