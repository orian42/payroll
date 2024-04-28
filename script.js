// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const employeesArray = new Array();

const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  var addanother = true;

  while (addanother) {
    
    //Get user input
    var firstName = prompt("Enter first name:");
    var lastName = prompt("Enter last name:");
    salary = prompt("Enter Salary");
    if (isNaN(salary)) {
      while (isNaN(salary)) {
      var salary = prompt("Salary must be a number.  Enter Salary");
      }
    }

    const employeeinfo = {
      firstName:firstName,
      lastName:lastName, 
      salary:salary //a default of zero for the salary is required
    } 

    //store information in "employeeinfo" array
    // employeeinfo[0] = firstname;
    // employeeinfo[1] = lastname;
    // employeeinfo[2] = salary;

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
