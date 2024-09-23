
// Task 1: Create an Employees Array of Employee Objects

let employees = [
    {name: "Gonzalo Plata", shifts: [{day: "Friday", hours: 8},{day: "Saturday", hours: 5}]},
    {name: "Moises Caicedo", shifts: [{day: "Wednesday", hours: 2}, {day: "Thursday", hours: 4}]},
    {name: "Piero Hincapie", shifts: [{day: "Tuesday", hours: 7}, {day: "Thursday", hours: 7}]},
    {name: "Kendry Paez", shifts: [{day: "Monday", hours: 9}, {day: "Sunday", hours: 1}]},
];


// Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts (employees) {
    employees.forEach(employee => {
        const {name, shifts} = employee; //Defining employee name and shifts 
        const shiftDetails = shifts.map(shift => `${shift.day} (${shift.hours} hours)`); // Display day and hours, shift information
            console.log(`${employee.name} worked on ${shiftDetails}.`);
        });
    };

displayEmployeeShifts(employees);//Run Function


// Task 3: Create a Function to Assign a New Shift

function assignShift (employeeName, day, hours) {
    let employee= employees.find(employee => employee.name === employeeName); //Find Employees in Array
    const hasShift = employee.shifts.some(shift => shift.day === day);

    if (hasShift) {
        console.log(`ERROR: ${employeeName} already has a shift on ${day}`); //Shift is already covered, Error display
    } else {
        employee.shifts.push({day,hours}); //If employee is available
            console.log(`Shift added for: ${employeeName} on ${day}`)
        }
    }

    assignShift("Moises Caicedo", "Friday", 3); //Example
    

// Task 4: Create a Function to Calculate Total Hours Worked

function calculateTotalHours(employeeName) {
    let employee= employees.find(employee => employee.name === employeeName); //Find Employees in Array
    const totalHours = employee.shifts.reduce((sum, shift) => sum + shift.hours, 0); // Calculate total hours worked
    console.log(`${employeeName} worked ${totalHours} hours total.`); // Identifies employee and total hours     
};

calculateTotalHours("Kendry Paez"); //Example


// Task 5: Create a Function to List Employees with Free Days

function listAvailableEmployees(day) {
    const availableEmployees = employees.filter(employee => 
        !employee.shifts.some(shift => shift.day === day)); //Recognize employee without a shift
   
        if (availableEmployees.length > 0) {
            const employeeNames = availableEmployees.map(employee => employee.name);
            console.log(`For ${day} the following employees are available: ${employeeNames}`)
        }   else {
            console.log(`No employees are available on ${day}.`);
        }  
}

listAvailableEmployees(`Tuesday`);
