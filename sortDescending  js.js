const userInput = prompt("Enter a list of numbers separated by commas:"); 
const numbers = userInput.split(',').map(Number);
function sortDescending(a, b) {
  return b - a;
}
numbers.sort(sortDescending);
console.log("Sorted in descending order: " + numbers);