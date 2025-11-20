let input = prompt("Enter a number, or type 'stop' to finish:");
const numbers = []; 

while (input !== "stop") {
  
  const num = Number(input);
  numbers.push(num);

    if (num % 2 === 0) {
        console.log(num + " is even!");
    } else {
        console.log(num + " is odd!");
    }

  input = prompt("Enter another number, or type 'stop' to finish:");
}

console.log("Goodbye!");
console.log("You entered:", numbers);
