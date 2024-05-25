// Prompt the user to enter their name
function Task1() {
const name = prompt("Please enter your name:");
}
// Greet the user
function Task2() {
alert(`Hello, ${Name}! Welcome.`);

}

// Prompt the user to enter a number
function Task3() {
let number = prompt("Enter a number:");

// If the user doesn't enter a number, default to 5
if (!number) {
    number = 5;
}

// Convert the input to a number
number = parseInt(number);

// Display the multiplication table
document.write(`<h2>Multiplication Table of ${number}:</h2>`);
for (let i = 1; i <= 10; i++) {
    document.write(`${number} × ${i} = ${number * i}<br>`);
}
}
