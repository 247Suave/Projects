//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container")

//Different items
const title = document.querySelector(".title");
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//Moving animation event
container.addEventListener('mousemove', (e) => {
let xAxis = (window.innerWidth / 2 - e.pageX) /25;
let yAxis = (window.innerHeight / 2 - e.pageY)/25;
card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In Container
container.addEventListener("mouseenter", (e) => {
card.style.transition = 'none';
//Make elements pop out
title.style.transform = "translateZ(150px)";
});



//Animate Out of Container
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform =  `rotateY(0deg) rotateX(0deg)`;
//Make element pop back in
    title.style.transform = "translateZ(0px)";
});

