const findEmployeeById = require('../utils/findEmployeeById');

/**
 *
 * @param {Array} employees 
 * @param {number} employeeId
 * @returns {number[]} 
 */
function getPathToCeo(employees, employeeId) {
  const employee = findEmployeeById(employees, employeeId);
  if (!employee) return [];

  const path = [];

  /**

   */
  function climb(empId, visited = new Set()) {
    const current = findEmployeeById(employees, empId);
    if (!current) return;

    if (visited.has(empId)) {
      console.error('Circular reference detected!');
      return;
    }
    visited.add(empId);

    path.push(empId);

    if (current.supervisor_id === null) return;

    climb(current.supervisor_id, visited);
  }

  climb(employeeId);

  return path;
}

module.exports = getPathToCeo;
