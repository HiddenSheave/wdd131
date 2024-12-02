console.log("JavaScript is running")

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
