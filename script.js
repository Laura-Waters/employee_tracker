// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let employeesArray = []; 

const collectEmployees = function () {
  let newEmployee = true;

  while (newEmployee) {

    let firstName = prompt('Enter first name');

    if (firstName === '') {
      alert('Please enter first name');
      firstName = prompt('Enter first name');
    }

    let lastName = prompt('Enter last name');

    if (lastName === '') {
      alert('Please enter last name');
      lastName = prompt('Enter last name');
    }

    let salary = prompt('Enter salary');

    if (salary === '') {
      alert('Please enter salary');
      salary = prompt('Enter salary');
    }

    if (isNaN(salary)) {
      salary = 0;
    }

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseInt(salary), 
    }; 

    employeesArray.push(employee); 

    newEmployee = window.confirm("Add Another?");

    if (newEmployee === false) {
      return employeesArray; 
    }

  }
}; 

let salaryArray = []; 

// Display the average salary
const displayAverageSalary = function(employeesArray) {

  for (let i=0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
    const currentEmployeeSalary = currentEmployee.salary; 
    salaryArray.push(currentEmployeeSalary);
  }

  let sum = 0;
  for (let i=0; i < salaryArray.length; i++) {
    sum += salaryArray[i];
  }

  const average = parseInt(sum / salaryArray.length); 
  const averageDisplay = average.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  }); 

  console.log(`The average salary between our ${salaryArray.length} employees is ${averageDisplay}.`)
  return average; 

} 

// Select a random employee
const getRandomEmployee = function(employeesArray) {
//   // TODO: Select and display a random employee
  randomEmployee = Math.floor(Math.random() * employeesArray.length);
  chosenEmployee = (employeesArray[randomEmployee]); 
  console.log(`Congratulations to our random drawing winner, ${chosenEmployee.firstName} ${chosenEmployee.lastName}!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
