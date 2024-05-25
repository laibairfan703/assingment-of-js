// Declare a variable called age and assign your age to it
function Task1() {
    let age = 18;

  
// Display your age in an alert box
alert( "age is 18");
}

// Check if the 'visitCount' variable exists in localStorage
function Task2() {
if (localStorage.getItem('visitCount') === null) {
    // If it doesn't exist, initialize it to 1
    localStorage.setItem('visitCount', 1);
  } else {
    // If it exists, increment its value
    let count = parseInt(localStorage.getItem('visitCount'));
    count++;
    localStorage.setItem,alert('visitCount', count);
  }
  
}
  // Retrieve the visit count from localStorage
  function Task3() {
  let visitCount = localStorage.getItem('visitCount');
  
  // Display the visit count on the webpage
  document.write("<h2>You have visited this site " + visitCount + " times.</h2>");
  }

    // Declare a variable called birthYear and assign your birth year to it
    function Task4() {
    let birthYear = 2004; 
    let variable = Number;
  
    // Display a message in the browser
    document.write("<h2>Your birth year is: " + birthYear + "</h2>");
    document.write("<h2>data type of my declared variable is : " + variable + "</h2>");
    }
    // Store visitor's information in variables
    function Task5() {
  let visitorName = "John Doe";
  let productTitle = "T-shirt";
  let quantity = 5; // Example: The visitor wants to order 5 products
  
  // Display a message in the browser
  document.write("<h2>" + visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.</h2>");
    }

 