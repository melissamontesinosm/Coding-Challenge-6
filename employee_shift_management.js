
// Task 1: Create an Employees Array of Employee Objects

const employees = [
    {name: "Gonzalo Plata", shifts: [{day: "Friday", hours: 8},{day: "Saturday", hours: 5}]},
    {name: "Moises Caicedo", shifts: [{day: "Wednesday", hours: 2}, {day: "Thursday", hours: 4}]},
    {name: "Piero Hincapie", shifts: [{day: "Tuesday", hours: 7}, {day: "Thursday", hours: 7}]},
    {name: "Kendry Paez", shifts: [{day: "Monday", hours: 9}, {day: "Sunday", hours: 1}]},
];


// Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts (employees) {
    employees.forEach(employee => {
        const {name, shifts} = employee; //Defining employee name and shifts 
        shifts.forEach(shift => {
            const {day, hours} = shift;
            console.log(`${employee.name} worked on ${day} for ${hours} hours.`);
        });
    });
}
displayEmployeeShifts(employees);

