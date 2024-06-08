import anime from 'animejs/lib/anime.es.js';

const boxes = document.querySelectorAll('div.box');
const animation = anime.timeline({
    loop: true

})

for (const box of boxes) {
    animation.add({
        targets: box,
        translateY: [
            { value: 200, duration: 1000 },
            { value: 0, duration: 1000 }
        ],
        rotate: {
            value: "1turn",
            easing: "easeInOutSine"
        },
    })
}
