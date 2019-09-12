
// Global Variables
const firstNumber = []
const secondNumber = []

// bringing in the HTML
var resultsText = document.getElementById("result")


// Plus Click Event
$("#plus").on("click", function () {
    
    var inputValue = $("#input-box").val().trim()
    var inputValue2 = $("#input-box2").val().trim()
    
    firstNumber.push(inputValue)
    secondNumber.push(inputValue2)
    
    resultsText.textContent = "Result: " + firstNumber + secondNumber;
})

// Minus Click Event
$("#minus").on("click", function () {
    
    var inputValue = $("#input-box").val().trim()
    var inputValue2 = $("#input-box2").val().trim()
    
    firstNumber.push(inputValue)
    secondNumber.push(inputValue2)
    
    resultsText.textContent = "Result: " + firstNumber - secondNumber;
})

// Multiply Click Event
$("#multiply").on("click", function () {
    
    var inputValue = $("#input-box").val().trim()
    var inputValue2 = $("#input-box2").val().trim()
    

    firstNumber.push(inputValue)
    secondNumber.push(inputValue2)
    
    resultsText.textContent = "Result: " + firstNumber * secondNumber;
})

// Divide Click Event
$("#divide").on("click", function () {
    
    var inputValue = $("#input-box").val().trim()
    var inputValue2 = $("#input-box2").val().trim()
    
    firstNumber.push(inputValue)
    secondNumber.push(inputValue2)
    
    console.log(firstNumber / secondNumber)
    resultsText.textContent = "Result: " + firstNumber / secondNumber;
})


// Clear Click Event
$("#clear").on("click", function () {
    console.log("Clear button pushed.....")
})



























// On button click, run this code
// $("#submit-button").on("click", function () {

//     // get val() of input(s)
//     var inputValue = $("#input-box").val().trim()
//     var inputValue2 = $("#input-box2").val().trim()

//     // pushing the value of the input(s) to the arrays
//     firstNumber.push(inputValue)
//     secondNumber.push(inputValue2)

//     // loging our math to the console
//     console.log(firstNumber[0] / secondNumber[0])

//     // console.log(firstNumber + secondNumber)
//     resultsText.textContent = "Result: " + firstNumber + secondNumber;

// })






// functions that will handle all of the math for each button
// function plus() {
//     firstNumber[0] + secondNumber[0]
//     console.log("Plus Button clicked")
// }

// function minus() {
//     firstNumber[0] - secondNumber[0]
//     console.log("Minus Button Clicked")
// }

// function divide() {
//     firstNumber[0] / secondNumber[0]
//     console.log("Divide Button clicked.....")
// }

// function multiply() {
//     firstNumber[0] * secondNumber[0]
//     console.log("Multiply Button Clicked")
// }

// function clear() {
//     // set value back to 0
//     console.log("Clear Button Clicked")
// }




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
