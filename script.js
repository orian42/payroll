// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const employeesArray = new Array();

const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  var addanother = true;

  while (addanother) {
    var salary = 0;  //a default of zero for the salary is required

    //Get user input
    var firstName = prompt("Enter first name:");
    var lastName = prompt("Enter last name:");
    salary = Number(prompt("Enter salary:"));
    if (isNaN(salary)) {
      while (isNaN(salary)) {
      var salary = prompt("INPUT ERROR: Salary must be a number.  Enter salary:");
      }
    }

    const employeeinfo = {
      firstName:firstName,
      lastName:lastName, 
      salary:salary
    } 
    //append "employeeinfo" array to "employeesArray"
    employeesArray.push(employeeinfo);
    //add another employee or finish
    addanother = confirm("Do you want to add another employee?");
  }

  return(employeesArray);
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  var totalSalaries = 0;

  for (i=0; i<employeesArray.length; i++) {
    totalSalaries = totalSalaries + employeesArray[i].salary;
  }
  var aveSalary = totalSalaries/employeesArray.length;

  console.log(totalSalaries);
  console.log(employeesArray.length);
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${aveSalary}.`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
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
