const fs = require('fs');
const path = require('path');
const getEmployeeDepth = require('./functions/getEmployeeDepth');
const getAllSubordinates = require('./functions/getAllSubordinates');
const getPathToCeo = require('./functions/getPathToCeo');
const findLowestCommonManager = require('./functions/findLowestCommonManager');
const { calculateTeamSalary, getCallCount, resetCallCount } = require('./functions/calculateTeamSalary');

const dataPath = path.join(__dirname, 'data', 'employee.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
const employees = data.employees;

console.log('--- Problem 1: Employee Depth ---');
console.log('Grace (id=7):', getEmployeeDepth(employees, 7));
console.log('Liam (id=12):', getEmployeeDepth(employees, 12));

console.log('\n--- Problem 2: All Subordinates ---');
console.log('Manager 2 (Bob Smith):');
console.log(getAllSubordinates(employees, 2));

console.log('\n--- Problem 3: Path to CEO ---');
console.log('Employee 12 (Liam Garcia):', getPathToCeo(employees, 12));
console.log('Employee 5 (Eve Davis):', getPathToCeo(employees, 5));
console.log('Employee 1 (Alice Johnson):', getPathToCeo(employees, 1));

console.log('\n--- Problem 4: Lowest Common Manager ---');
console.log('Employees 12 & 9:', findLowestCommonManager(employees, 12, 9));
console.log('Employees 8 & 10:', findLowestCommonManager(employees, 8, 10));
console.log('Employees 1 & 12:', findLowestCommonManager(employees, 1, 12));

console.log('\n--- Problem 5: Team Salary with Memoization ---');
resetCallCount();

const memo = new Map();
const salary1 = calculateTeamSalary(employees, 1, memo);
const salary2 = calculateTeamSalary(employees, 4, memo);
const salary3 = calculateTeamSalary(employees, 7, memo);
const salary4 = calculateTeamSalary(employees, 12, memo);

console.log('Salary for CEO (1):', salary1);
console.log('Salary for David (4):', salary2);
console.log('Salary for Grace (7):', salary3);
console.log('Salary for Liam (12):', salary4);

console.log('\nMemoization Demonstration:');
console.log('Total recursive calls made:', getCallCount());
console.log('Cached results in memo:', Array.from(memo.entries()));
