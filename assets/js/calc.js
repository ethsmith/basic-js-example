let numFieldOne = document.getElementById("numFieldOne");
let numFieldTwo = document.getElementById("numFieldTwo");
let resultField = document.getElementById("resultField");
let form = document.getElementById("percentCalculator");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!numFieldOne.value || !numFieldTwo.value) {
        alert("Please enter values in all fields!")
        return;
    }

    let numOne = parseFloat(numFieldOne.value);
    let numTwo = parseFloat(numFieldTwo.value);
    let percent = (numOne / numTwo) * 100;

    resultField.innerText = "Result: " + percent + "%";
});