//carousel instead of carousel-slide
const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel img');

//Buttons
const prevBtn = document.querySelector('#prevBtn'); 
const nextBtn = document.querySelector('#nextBtn'); 

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carousel.style.transform = 'translateX(' + (-size * counter) + ('px');

//Buttons

nextBtn.addEventListener('click', ()=>{
    if(counter >= carouselImages.length -1) return;
    carousel.style.transform = "transform 0.4s ease-in-out";
    counter++;
    carousel.style.transform = 'translateX(' + (-size * counter) + ('px');
});

prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    carousel.style.transform = "transform 0.4s ease-in-out";
    counter--;
    carousel.style.transform = 'translateX(' + (-size * counter) + ('px');
});

carousel.addEventListener('transitioned', ()=>{
    if(carouselImages[counter].id ==='lastClone'){
        carousel.style.transition = "none";
        counter = carouselImages.length - 2;
        carousel.style.transform = 'translateX(' + (-size * counter) + ('px');
    }
    if(carouselImages[counter].id ==='firstClone'){
        carousel.style.transition = "none";
        counter = carouselImages.length - counter;
        carousel.style.transform = 'translateX(' + (-size * counter) + ('px');
    }
})