
// Global Variables
const firstNumber = []
const secondNumber = []

// bringing in the HTML
var resultsText = document.getElementById("result")

// On button click, run this code
$("#submit-button").on("click", function () {

    // get val() of input(s)
    var inputValue = $("#input-box").val().trim()
    var inputValue2 = $("#input-box2").val().trim()

    // Showing the values
    console.log("Input Box One: " + inputValue)
    console.log("Input Box Two: " + inputValue2)


    // pushing the value of the input(s) to the arrays
    firstNumber.push(inputValue)
    secondNumber.push(inputValue2)

    console.log(firstNumber[0] + secondNumber[0])

    // console.log(firstNumber + secondNumber)
    resultsText.textContent = "Result: " + firstNumber + secondNumber;

    divide()

    // switch statement
    // switch (asdf) {
    //     // ex: // switch (new Date().getDay())
        
    //     case "plus":
    //         plus()
    //     break;
    
    //     case "minus":
    //         minus()
    //     break;
    
    //     case "divide": 
    //         divide()
    //     break;
    
    //     case "multiply":
    //         multiply()
    //     break;
    
    //     case "clear":
    //         clear()
    //     break;
    // }
})


// get the numbers to display on the screen

function plus() {
    firstNumber + secondNumber
    console.log("Plus Button clicked")
}

function minus() {
    firstNumber - secondNumber
    console.log("Minus Button Clicked")
}

function divide() {
    firstNumber / secondNumber
    console.log("Divide Button clicked.....")
}

function multiply() {
    firstNumber * secondNumber
    console.log("Multiply Button Clicked")
}

function clear() {
    // set value back to 0
    console.log("Clear Button Clicked")
}

