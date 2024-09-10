function appendToDisplay(value) {
    // Define a function named appendToDisplay that takes one parameter, 'value'

    const display = document.getElementById('display');
    // Get the HTML element with the ID 'display' and store it in the variable 'display'

    if (display.textContent === '0' && value !== '/' && value !== '*') {
        // Check if the current text in the display is '0' and the new value is not '/' or '*'
        
        display.textContent = value;
        // If the condition is true, set the display text to the new value (replace '0')
    } else {
        // If the condition is false (i.e., the display is not '0' or the value is '/' or '*')
        
        display.textContent += value;
        // Append the new value to the existing text in the display
    }
}

function clearDisplay() {
    // Define a function named clearDisplay with no parameters

    document.getElementById('display').textContent = '0';
    // Find the HTML element with the ID 'display' and set its text content to '0'
}

function calculate() {
    // Define a function named calculate with no parameters

    const display = document.getElementById('display');
    // Get the HTML element with the ID 'display' and store it in the variable 'display'

    const expression = display.textContent;
    // Store the current text in the display (which is the mathematical expression) in the variable 'expression'

    try {
        // Begin a block of code that might throw an error

        const result = new Function('return ' + expression)();
        // Create a new function using the Function constructor to evaluate the expression and get the result
        // For example, '2+2' becomes 'return 2+2'
        // The new Function is then called to execute and compute the result

        display.textContent = result % 1 === 0 ? result.toString() : result;
        // Set the display text to the result
        // If the result is an integer (i.e., no decimal part), convert it to a string without decimals
        // Otherwise, display the result as is (with decimals if necessary)
    } catch {
        // If an error occurs in the try block (e.g., invalid expression)
        
        display.textContent = 'Error';
        // Set the display text to 'Error'
    }
}

