/**
 *
 * @param {Array} employees 
 * @param {number} managerId
 * @returns {Array<{id: number, name: string, relative_depth: number}>}
 */
function getAllSubordinates(employees, managerId) {
  const subordinates = [];

  /**
   * @param {number} currentManagerId
   * @param {number} depth 
   */
  function dfs(currentManagerId, depth) {
    const directReports = employees.filter(emp => emp.supervisor_id === currentManagerId);

    for (const emp of directReports) {
      subordinates.push({
        id: emp.id,
        name: emp.name,
        relative_depth: depth
      });

      dfs(emp.id, depth + 1);
    }
  }

  dfs(managerId, 1);

  subordinates.sort((a, b) => {
    if (a.relative_depth === b.relative_depth) {
      return a.id - b.id;
    }
    return a.relative_depth - b.relative_depth;
  });

  return subordinates;
}

module.exports = getAllSubordinates;
