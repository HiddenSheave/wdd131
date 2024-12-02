document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#informationForm");
    const userName = document.querySelector("#name");
    const userNumber = document.querySelector("#number");
    const userEmail = document.querySelector("#email");

    if (localStorage.getItem("formData")) {
        const savedData = JSON.parse(localStorage.getItem("formData"));
        userName.value = savedData.name || "";
        userNumber.value = savedData.number || "";
        userEmail.value = savedData.email || "";
    }

    form.addEventListener("input", function() {
        const formData = {
            name: userName.value,
            number: userNumber.value,
            email: userEmail.value,
        };
        localStorage.setItem("formData", JSON.stringify(formData));
    });

    form.addEventListener("submit", function() {
        localStorage.removeItem("formData");
    });
});
