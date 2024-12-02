console.log("JavaScript is running")

let slideShow = 1;
showSlides(slideShow);

function plusSlides(n) {
    showSlides(slideShow += n);
}

function currentSlide(n) {
    showSlides(slideShow = n);
}

function showSlides (n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {slideShow = 1;}
    if (n < 1) {slideShow = slides.length;}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideShow - 1].style.display = "block";

    setTimeout(function() {
        showSlides(slideShow += 1);
    }, 6000);
}

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav")

hamButton.addEventListener('click', function() {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.navigation a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link =>
    link.classList.remove('active'));
            link.classList.add('active');
    });
});