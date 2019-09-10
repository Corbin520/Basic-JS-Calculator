
const firstNumber = []
const secondNumber = []

// build out on click event for the button
$("#submit-button").on("click", function() {

    // on the click, get the value of whats in the input box
    var inputValue = $("#input-box").val().trim()
    var inputValue2 = $("#input-box2").val().trim()

    // show value response
    
    firstNumber.push(inputValue)
    secondNumber.push(inputValue2)
    
    
    // add()
    console.log(firstNumber + secondNumber)
})

function add() {

    // make the number at each index + together
    for (var i = 0; i < numbers.length; i++) {
        console.log(numbers[i] + numbers[i])
    }
}

// Building a calculator 

    // what we have:
        // plus
        // minus
        // divide
        // subtract

    // How will we get it to work?
        // we need to create a function for each math type 

    // we will handle the math part by a switch statement
        // 

