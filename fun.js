const firstNumber = []
const secondNumber = []

var resultsText = document.getElementById("result")

// build out on click event for the button
$("#submit-button").on("click", function () {

    // on the click, get the value of whats in the input box
    var inputValue = $("#input-box").val().trim()
    var inputValue2 = $("#input-box2").val().trim()

    // show value response

    firstNumber.push(inputValue)
    secondNumber.push(inputValue2)

    console.log(firstNumber + secondNumber)
    resultsText.textContent = "Result: " + firstNumber + secondNumber;
})


// get the numbers to display on the screen

function plus() {
    // a + b
}

function minus() {
    // a - b
}

function divide() {
    // a / b
}

function multiply() {
    // a * b
}

function clear() {
    // clear fields
}


switch (asdf) {

    case "plus":
        plus()
    break;

    case "minus":
        minus()
    break;

    case "divide": 
        divide()
    break;

    case "multiply":
        multiply()
    break;

    case "clear":
        clear()
    break;
}


// Building a calculator 

// what we have:
// plus
// minus
// divide
// multiply

// How will we get it to work?
// we need to create a function for each math type 

// we will handle the math part by a switch statement
// 