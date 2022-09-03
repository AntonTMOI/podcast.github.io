var slides = document.querySelectorAll('.slide');
var single = document.querySelectorAll('.single');
let currentSlide = 1;

var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');
        
        single.forEach((single) => {
            single.classList.remove('active');
        });
    });
    
    slides[manual].classList.add('active');
    single[manual].classList.add('active');
}

single.forEach((single, i) => {
    single.addEventListener("click", () => {
        manualNav(i);
        currebtSlide = i;
    });
});

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;
    
    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });
            
            slides[i].classList.add('active');
            single[i].classList.add('active');
            i++;
            
            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}

repeat();

const hamburger = document.querySelector(".hamburger");
const ol = document.querySelector("ol");
const links = document.querySelector("ol li");

hamburger.addEventListener('click', () => {
    ol.classList.toggle('open');
});