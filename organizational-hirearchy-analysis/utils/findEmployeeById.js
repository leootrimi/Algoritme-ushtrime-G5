function findEmployeeById(employees, id) {
  return employees.find(emp => emp.id === id) || null;
}

module.exports = findEmployeeById;
