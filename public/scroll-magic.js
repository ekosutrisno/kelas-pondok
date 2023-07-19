// Create a new ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Beranda
const sceneBeranda = new ScrollMagic.Scene({
    triggerElement: '#trigger-beranda',
    duration: 400
})

const timelineBeranda = new TimelineMax();
timelineBeranda
    .from('#target-beranda', 1, { opacity: 0, scale: 0.80 })
    .from('#target-beranda-feat', { y: '25%', ease: Linear.easeNone, opacity: 0 });
sceneBeranda.setTween(timelineBeranda).addTo(controller);

// Profile
const sceneProfile = new ScrollMagic.Scene({
    triggerElement: '#trigger-profile',
    duration: 400
});

const timelineProfile = new TimelineMax();
timelineProfile
    .from('#target-profile', { y: '50%', x: '5%', ease: Linear.easeNone })
    .from('#target-profile-feat', { y: '25%', ease: Linear.easeNone, opacity: 0 });
sceneProfile.setTween(timelineProfile).addTo(controller);

// Bacaanku
const sceneBacaanku = new ScrollMagic.Scene({
    triggerElement: '#trigger-bacaanku',
    duration: 400
});

const timelineBacaanku = new TimelineMax();
timelineBacaanku
    .from('#target-bacaanku', 1, { opacity: 0 })
    .from('#target-bacaanku-feat', { y: '25%', ease: Linear.easeNone, opacity: 0 });
sceneBacaanku.setTween(timelineBacaanku).addTo(controller);

// Surat
const sceneSurat = new ScrollMagic.Scene({
    triggerElement: '#trigger-surat',
    duration: 400
});

const timelineSurat = new TimelineMax();
timelineSurat
    .from('#target-surat', 1, { opacity: 0, scale: 0.5 })
    .from('#target-surat-feat', { y: '25%', ease: Linear.easeNone, opacity: 0 });

sceneSurat.setTween(timelineSurat).addTo(controller);

// Kelas
const sceneKelas = new ScrollMagic.Scene({
    triggerElement: '#trigger-kelas',
    duration: 400
});

const timelineKelas = new TimelineMax();
timelineKelas
    .from('#target-kelas', { y: '25%', x: '-5%', ease: Linear.easeNone })
    .from('#target-kelas-feat', { y: '25%', ease: Linear.easeNone, opacity: 0 });

sceneKelas.setTween(timelineKelas).addTo(controller);

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
new ScrollMagic.Scene({
    triggerElement: '#cta-img-trigger',
    duration: 500
})
    .setTween(TweenMax.from('#cta-img-dark', 1, { y: '20%', x: '25%', ease: Linear.easeNone }))
    .addTo(controller);
