// Create a new ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Beranda
new ScrollMagic.Scene({
    triggerElement: '#trigger-beranda',
    duration: 400
})
    .setTween(TweenMax.from('#target-beranda', 1, { opacity: 0, scale: 0.80 }))
    .addTo(controller);

// Profile
new ScrollMagic.Scene({
    triggerElement: '#trigger-profile',
    duration: 400
})
    .setTween(TweenMax.from('#target-profile', { y: '50%', x: '5%', ease: Linear.easeNone }))
    .addTo(controller);

// Bacaanku
new ScrollMagic.Scene({
    triggerElement: '#trigger-bacaanku',
    duration: 400
})
    .setTween(gsap.from('#target-bacaanku', 1, { opacity: 0 }))
    .addTo(controller);

// Surat
new ScrollMagic.Scene({
    triggerElement: '#trigger-surat',
    duration: 400
})
    .setTween(TweenMax.from('#target-surat', 1, { opacity: 0, scale: 0.5 }))
    .addTo(controller);

// Kelas
new ScrollMagic.Scene({
    triggerElement: '#trigger-kelas',
    duration: 400
})
    .setTween(TweenMax.from('#target-kelas', { y: '25%', x: '-5%', ease: Linear.easeNone }))
    .addTo(controller);

// IMG CTA LIGHT
const sceneImgLight = new ScrollMagic.Scene({
    triggerElement: '#cta-img-trigger',
    duration: 500
})

var timelineImgLight = new TimelineMax();
timelineImgLight
    .from('#cta-img-light', 1, { y: '20%', x: '25%', ease: Linear.easeNone })
    .from('#cta-img-title', { x: '-5%', ease: Linear.easeNone, opacity: 0 })
sceneImgLight.setTween(timelineImgLight).addTo(controller);

// IMG CTA DARK
const sceneImgDark = new ScrollMagic.Scene({
    triggerElement: '#cta-img-trigger',
    duration: 500
});

var timelineImgDark = new TimelineMax();
timelineImgDark
    .from('#cta-img-dark', 1, { y: '20%', x: '25%', ease: Linear.easeNone })
sceneImgDark.setTween(timelineImgDark).addTo(controller);
