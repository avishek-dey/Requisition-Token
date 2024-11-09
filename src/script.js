// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});


gsap.from(".header-image", { // selector text, Array, or object
  y: 200,
  opacity:0,
  duration: 1,
  ease: "back.out(1.7)",
  stagger: 0.2,
  
  
})

gsap.from(".features", { // selector text, Array, or object
  opacity:0,
  y: 200,
  duration: 1,
  ease: "back.out(1.7)",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".section-2", // selector or element
    // scrub: true,
    start: "top 90%" ,
    end: "40% 30%",
    // markers: true, // only during development!
    }
 
  
})

gsap.from(".card", { // selector text, Array, or object
  y: 200,
  opacity:0,
  duration: 1,
  ease: "back.out(1.7)",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".section-3", // selector or element
    // scrub: true,
    start: "top 90%" ,
    end: "40% 30%",
    // markers: true, // only during development!
    }
 
  
})

gsap.from(".price", { // selector text, Array, or object
  y: 200,
  opacity:0,
  duration: 1,
  ease: "back.out(1.7)",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".price", // selector or element
    // scrub: true,
    start: "top 90%" ,
    end: "40% 30%",
    // markers: true, // only during development!
    }
 
  
})

gsap.from(".cta-image", { // selector text, Array, or object
  y: 100,
  opacity:0,
  duration: 1,
  ease: "back.out(1.7)",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".section-5", // selector or element
    // scrub: true,
    start: "top 90%" ,
    end: "40% 30%",
    // markers: true, // only during development!
    }
 
  
})