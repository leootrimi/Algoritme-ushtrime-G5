const findEmployeeById = require('../utils/findEmployeeById');

/**
 * @param {Array} employees
 * @returns {Map<number, Object>}
 */
function buildEmployeeMap(employees) {
  const map = new Map();
  for (const emp of employees) {
    map.set(emp.id, emp);
  }
  return map;
}

/**

 * @param {Array} employees 
 * @param {number} employeeId
 * @returns {number} 
 */
function getEmployeeDepth(employees, employeeId) {
  const empMap = buildEmployeeMap(employees);
  if (!empMap.has(employeeId)) return -1;

  const visited = new Set();

  function helper(id, depth) {
    if (visited.has(id)) {
      console.error('⚠️ Circular reference detected!');
      return -1;
    }
    visited.add(id);

    const emp = empMap.get(id);
    if (!emp) return -1;

    if (emp.supervisor_id === null) {
      return depth;
    }

    return helper(emp.supervisor_id, depth + 1);
  }

  return helper(employeeId, 0);
}

module.exports = getEmployeeDepth;
