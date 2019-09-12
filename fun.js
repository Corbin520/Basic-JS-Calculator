
// Global Variables
const firstNumber = []
const secondNumber = []

// bringing in the HTML
var resultsText = document.getElementById("result")

function resetResults() {
    //  build out a function that will clear our results
    location.reload()
}


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

    resetResults()
    console.log("Clear button pushed.....")
})

