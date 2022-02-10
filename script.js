gsap.registerPlugin('ScrollTrigger');
const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});


gsap.registerPlugin(ScrollTrigger)


scroller.on('scroll', ScrollTrigger.update)

ScrollTrigger.scrollerProxy(
    '#main', {
        scrollTop(value) {
            return arguments.length ?
                scroller.scrollTo(value, 0, 0) :
                scroller.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
            return {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
    }
)


ScrollTrigger.create({
    trigger: '#secondpage',
    scroller: '#main',
    start: 'top+=80% 15%',
    end: 'bottom-=10% 10%',
    animation: gsap.to('#photuin', { backgroundSize: '120%' }),
    scrub: 2,
    // markers: true
})


ScrollTrigger.create({
    trigger: '#secondpage',
    scroller: '#main',
    start: 'top+=90% 10%',
    end: 'bottom-=40% 50%',
    animation: gsap.to('#secondpara', { scale: '1.5' }),
    scrub: 2,
    // markers: true
})


document.querySelector("#o").addEventListener('mouseover', function() {
    document.querySelector("#o").style.transform = "scale(2)";
})

document.querySelector("#o").addEventListener('mouseout', function() {
    document.querySelector("#o").style.transform = "scale(1)";
})



// var tlone = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".section-22",
//         scroller: "#main",
//         stagger: 2,
//         // markers: true,
//         start: "top 60%",
//         scrub: true
//     }
// });

// tlone.to("#afterhome h1", {
//     onStart: function() {
//         $('#pinSection').textillate({ in: { effect: 'fadeInUp' } });
//     }
// })





let box = document.querySelector("#one");
console.log(box)
document.querySelector("#one").addEventListener('click', function() {
    document.querySelector("#one").style.transform = "scale(2)";
    document.querySelector("#one").style.transform = "translate(-50%,-50%) scale(1.5)";
})

document.querySelector("#two").addEventListener('click', function() {
    document.querySelector("#two").style.transform = "scale(2)";
    document.querySelector("#two").style.transform = "translate(-50%,-50%) scale(1.5)";
})

document.querySelector("#three").addEventListener('click', function() {
    document.querySelector("#three").style.transform = "scale(2)";
    document.querySelector("#three").style.transform = "translate(-50%,-50%) scale(1.5)";
})

document.querySelector("#four").addEventListener('click', function() {
    document.querySelector("#four").style.transform = "scale(2)";
    document.querySelector("#four").style.transform = "translate(-50%,-50%) scale(1.5)";
})

document.querySelector("#five").addEventListener('click', function() {
    document.querySelector("#five").style.transform = "scale(2)";
    document.querySelector("#five").style.transform = "translate(-50%,-50%) scale(1.5)";
})






var f = true;
let images = document.querySelectorAll(".images-container img");
images.forEach(function(val) {
    val.addEventListener('click', function() {
        val.style.transform = "translate(20%,-10%) scale(1.3)";
        console.log("shdj");
    })
})



ScrollTrigger.addEventListener('refresh', () => scroller.update())


ScrollTrigger.refresh()



// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
//     multiplier: 1.4, // Effect Multiplier
//     reloadOnContextChange: true,
//     touchMultiplier: 2,
//     smoothMobile: 0,
// });