// Function to add two numbers
function Task1() {
    // Get the values of the input fields
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    
    // Add the numbers
    let sum = num1 + num2;
    
    // Display the result in the browser
    document.write("<h1>Sum</h1>");
}
function Task2() {
document.write("The sum of " + num1 + " and " + num2 + " is: " + sum);
  }

  // Call the function to add numbers when the page loads


  // Function to perform math operations
  function Task3() {
    // Get the values of the input fields
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    
    // Perform subtraction
    let subtractionResult = num1 - num2;
    
    // Perform multiplication
    let multiplicationResult = num1 * num2;
    
    // Perform division
    let divisionResult = num1 / num2;
    
    // Perform modulus
    let modulusResult = num1 % num2;
    
    // Display the results in the browser
    document.write("<h1> subrstract ,multiplication,division and modulus</h1>");
    document.write("<p>Subtraction: " + num1 + " - " + num2 + " = " + subtractionResult + "</p>");
    document.write("<p>Multiplication: " + num1 + " * " + num2 + " = " + multiplicationResult + "</p>");
    document.write("<p>Division: " + num1 + " / " + num2 + " = " + divisionResult + "</p>");
    document.write("<p>Modulus: " + num1 + " % " + num2 + " = " + modulusResult + "</p>");
  }

  // Call the function to perform math operations when the page loads
  

  // Declare a variable
  function Task4() {
  let myVariable;

  // Show the value of the variable after declaration
  document.write("Value after variable declaration is: " + myVariable + "<br>");
  }
  // Initialize the variable with some number
  function Task5() {
  myVariable = 5;

  // Show the initial value of the variable
  document.write("Initial value: " + myVariable + "<br>");
  }
  // Increment the variable
 function Task6() {
  myVariable = 5;
  myVariable++;

  // Show the value of the variable after increment
  document.write("Value after increment is: " + myVariable + "<br>");
 }
  // Add 7 to the variable
  function Task7() {
    myVariable = 5;
    myVariable += 7;

  // Show the value of the variable after addition
  document.write("Value after addition is: " + myVariable + "<br>");
  }
  // Decrement the variable
 function Task8() { 
  myVariable = 5;
  myVariable--;

  // Show the value of the variable after decrement
  document.write("Value after decrement is: " + myVariable + "<br>");
 }
  // Show the remainder after dividing the variable's value by 3
 function Task9() {
  myVariable = 5;
  let remainder = myVariable % 3;
  document.write("The remainder is: " + remainder);
 }

   // Cost of one movie ticket in PKR
   function Task10() {let ticketPrice = 600;

   // Number of tickets to buy
   let numberOfTickets = 5;
 
   // Calculate the total cost of buying 5 tickets
   let totalCost = ticketPrice * numberOfTickets;
 
   // Display the total cost in the browser
   document.write("<h1>Ticket price</h1>");
   document.write("Total cost of buying " + numberOfTickets + " tickets to the movie is: " + totalCost + " PKR");

   }

   // Function to display multiplication table
  function Task11() {
    // Prompt the user to enter a number
    let number = parseInt(prompt("Enter a number to display its multiplication table:"));
    
    // Display the multiplication table in the browser
    document.write("<h1>Multiplication Table of " + number + ":</h1>");
    document.write("<ul>");
    for (let i = 1; i <= 10; i++) {
      let result = number * i;
      document.write("<li>" + number + " x " + i + " = " + result + "</li>");
    }
    document.write("</ul>");
  }

  // Call the function to display multiplication table when the page loads




  // Celsius temperature
  function Task12() {
    let celsiusTemp = 30;

  // Convert Celsius to Fahrenheit
  let fahrenheitTemp = 5

  // Output the result
  document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");
  }
  // Fahrenheit temperature
  function Task13() {let fahrenheitTemp2 = 86;

  // Convert Fahrenheit to Celsius
  let celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;

  // Output the result
  document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");
  }

// Variables
function Task14() {
  let priceItem1 = 20; // Price of item 1
let priceItem2 = 30; // Price of item 2
let quantityItem1 = 3; // Ordered quantity of item 1
let quantityItem2 = 2; // Ordered quantity of item 2
let shippingCharges = 10; // Shipping charges

// Calculate total cost
let totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// Display receipt in browser
document.write("<h1>Receipt</h1>");
document.write("<p>Price of Item 1: $" + priceItem1 + "</p>");
document.write("<p>Price of Item 2: $" + priceItem2 + "</p>");
document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
document.write("<p><strong>Total Cost: $" + totalCost + "</strong></p>");
}

 // Variables
 function Task15() {let totalMarks = 500; // Total marks
 let marksObtained = 420; // Marks obtained by the student

 // Calculate percentage
 let percentage = (marksObtained / totalMarks) * 100;

 // Display result in browser
 document.write("<h1> Percentage</h1>");
 document.write("<p>Total Marks: " + totalMarks + "</p>");
 document.write("<p>Marks Obtained: " + marksObtained + "</p>");
 document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
 }


 // Variables
 function Task16() {let usDollars = 10; // Amount in US dollars
 let saudiRiyals = 25; // Amount in Saudi Riyals
 let exchangeRateUSD = 104.80; // Exchange rate for US Dollar to Pakistani Rupee
 let exchangeRateSAR = 28; // Exchange rate for Saudi Riyal to Pakistani Rupee

 // Perform currency conversion and calculate total in Pakistani Rupees
 let totalInPKR = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);

 // Display result in browser
 document.write("<h1> Currency</h1>");
 document.write("<p>Total currency in Pakistani Rupees: " + totalInPKR.toFixed(2) + " PKR</p>");

 }
// question 10
 function Task17() {let num = 6;

alert(6 + 2 * 5 / 4);
 }


// Store the current year in a variable

 function Task18() {
  let currentYear = 2024;
 let birthage = 2004;
 let yourage = 19;
 
// Output the ages to the screen

document.write("<h1>Age calculator</h1>");
document.write("<p>current year: " + currentYear + "</p>");
document.write("<p>birth Age: " + birthage + "</p>");
document.write("<p> your age is:" +  yourage + "</p>");
 }
//calculate the circumfrences
function Task19() {
  let radius = 20;
let circumfrences = 125.679999999999999;
let area = 1256.8;
 
// Output the geometrizer to the screen

document.write("<h1>The Geometrizer</h1>");
document.write("<p>radius of a circle: " + radius + "</p>");
document.write("<p>the circumference is: " + circumfrences + "</p>");
document.write("<p> the area is:" +  area + "</p>");

}

// lifetime supply calcuator

 function Task20() {
 let age = 15;
 let maximum = 65;
 let amountsnacks = 3;
 
 
// Output the geometrizer to the screen

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write(Name, "favourite snack: choclate chip ");

document.write("<p> Current age:" + age + "</p>");
document.write("<p> Estimated Maximum:" +  maximum + "</p>");
document.write("<p> Amount of snacks per day:" +  amountsnacks + "</p>");
document.write(Name, "You will need 160 choclate chip to last you until the ripe old age of 63 ");
 }