const findEmployeeById = require('../utils/findEmployeeById');

let callCount = 0;
/**
 *
 * @param {Array} employees
 * @param {number} managerId 
 * @param {Map<number, number>} memo
 * @returns {number}
 */
function calculateTeamSalary(employees, managerId, memo = new Map()) {
  const manager = findEmployeeById(employees, managerId);
  if (!manager) return 0;

  if (memo.has(managerId)) {
    return memo.get(managerId);
  }

  callCount++;

  let totalSalary = manager.salary || 0;

  const subordinates = employees.filter(emp => emp.manager_id === managerId);

  for (const sub of subordinates) {
    totalSalary += calculateTeamSalary(employees, sub.id, memo);
  }

  memo.set(managerId, totalSalary);

  return totalSalary;
}

function getCallCount() {
  return callCount;
}

function resetCallCount() {
  callCount = 0;
}

module.exports = {
  calculateTeamSalary,
  getCallCount,
  resetCallCount,
};
