let equalButton = document.getElementById("doTheCalculation");

equalButton.addEventListener("click", () => {
    // Get the number 1 value
const number1 = document.getElementById("number1").value;
const number2 = document.getElementById("number2");
const sum = addNumbers("number1, number2");
document.getElementById("result").textContent = `Result: ${sum}`;
});