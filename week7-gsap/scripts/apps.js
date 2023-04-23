console.log('apps.js loaded');

let timeline = gsap.timeline();

timeline.to('h1', {duration:.2, x: 300});
timeline.to('.box', {duration:1, x: 300, rotation: 360,});
timeline.from('li', {duration: 0.3, x: "-300px", stagger: .5});