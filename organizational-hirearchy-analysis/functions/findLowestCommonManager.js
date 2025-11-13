const findEmployeeById = require('../utils/findEmployeeById');
const getPathToCeo = require('./getPathToCeo');

/**
 *
 * @param {Array} employees
 * @param {number} empId1
 * @param {number} empId2
 * @returns {{
 *   manager_id: number,
 *   manager_name: string,
 *   distance_to_emp1: number,
 *   distance_to_emp2: number
 * } | null}
 */
function findLowestCommonManager(employees, empId1, empId2) {
  const emp1 = findEmployeeById(employees, empId1);
  const emp2 = findEmployeeById(employees, empId2);

  if (!emp1 || !emp2) return null;

  const path1 = getPathToCeo(employees, empId1);
  const path2 = getPathToCeo(employees, empId2);

  const reversed1 = [...path1].reverse();
  const reversed2 = [...path2].reverse();

  let commonManagerId = null;

  const minLength = Math.min(reversed1.length, reversed2.length);
  for (let i = 0; i < minLength; i++) {
    if (reversed1[i] === reversed2[i]) {
      commonManagerId = reversed1[i];
    } else {
      break;
    }
  }

  if (!commonManagerId) return null;

  const manager = findEmployeeById(employees, commonManagerId);

  const distance_to_emp1 = path1.indexOf(commonManagerId);
  const distance_to_emp2 = path2.indexOf(commonManagerId);

  return {
    manager_id: manager.id,
    manager_name: manager.name,
    distance_to_emp1,
    distance_to_emp2,
  };
}

module.exports = findLowestCommonManager;
