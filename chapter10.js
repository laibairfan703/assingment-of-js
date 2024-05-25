// Take input for subject names
function Task1() {
const subject1 = prompt("Enter the name of first subject:");
const subject2 = prompt("Enter the name of second subject:");
const subject3 = prompt("Enter the name of third subject:");

// Total marks for each subject
const totalMarks = 100;
}
// Take input for obtained marks for each subject
function Task2() {
let obtainedMarks1 = parseInt(prompt(`Enter obtained marks for ${subject1}:`));
let obtainedMarks2 = parseInt(prompt(`Enter obtained marks for ${subject2}:`));
let obtainedMarks3 = parseInt(prompt(`Enter obtained marks for ${subject3}:`));

// Calculate total marks and percentage
const totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
const percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

// Display result in a table
document.write("<h2>Result</h2>");
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write(`<tr><td>${subject1}</td><td>${totalMarks}</td><td>${obtainedMarks1}</td></tr>`);
document.write(`<tr><td>${subject2}</td><td>${totalMarks}</td><td>${obtainedMarks2}</td></tr>`);
document.write(`<tr><td>${subject3}</td><td>${totalMarks}</td><td>${obtainedMarks3}</td></tr>`);
document.write("<tr><th>Total</th><th colspan='2'>Percentage</th></tr>");
document.write(`<tr><td>${totalObtainedMarks}</td><td colspan='2'>${percentage.toFixed(2)}%</td></tr>`);
document.write("</table>");
}