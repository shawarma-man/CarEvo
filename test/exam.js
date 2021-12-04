document.querySelector("#sign-in-btn").addEventListener("click", function (){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function (){
    document.querySelector(".popup").classList.remove("active");
});

//////////////////////////////////////////////////////////////////////////////////
document.querySelector("#sign-up-btn").addEventListener("click", function (){
    document.querySelector("#signup-form").classList.add("active");
});

document.querySelector("#signup-form .close-btn").addEventListener("click", function (){
    document.querySelector("#signup-form").classList.remove("active");
});

let header = document.getElementById("header_content_1");
const typed = new Typed(".animate", {
    strings: ["Creativity", "Ambitiousness","CarEvo™"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});
// Fix nav bar top when scrolling
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.header_col').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.querySelector(".header_col").classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});
