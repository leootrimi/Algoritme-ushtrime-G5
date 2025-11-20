// index.js
const MyCircularQueue = require("problem622.js");
const numOfWays = require("problem1569.js");



// Test Problem 622 - MyCircularQueue

console.log(" Problem 622: MyCircularQueue");

const myCircularQueue = new MyCircularQueue(3);

console.log(myCircularQueue.enQueue(1)); 
console.log(myCircularQueue.enQueue(2)); 
console.log(myCircularQueue.enQueue(3)); 
console.log(myCircularQueue.enQueue(4)); // false

console.log("Rear:", myCircularQueue.Rear());     
console.log("isFull:", myCircularQueue.isFull()); 

console.log(myCircularQueue.deQueue());  
console.log(myCircularQueue.enQueue(4)); 

console.log("Rear:", myCircularQueue.Rear());   
console.log("Front:", myCircularQueue.Front()); 
console.log("Empty?", myCircularQueue.isEmpty());
console.log("Full?", myCircularQueue.isFull());

console.log("\n");

//  Problem 1569 - numOfWays
 
console.log(" Problem 1569: numOfWays");

const tests1569 = [
  { nums: [2, 1, 3], expected: 1 },
  { nums: [3, 4, 5, 1, 2], expected: 5 },
  { nums: [1, 2, 3], expected: 0 },
];

for (const { nums, expected } of tests1569) {
  const result = numOfWays(nums);
  console.log(`nums = [${nums.join(", ")}] -> result = ${result}, expected = ${expected}`);
}
