//Part 1: Thinking Functionally//
// Function to calculate the sum of an array of numbers
function sumArray(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Function to calculate the average of an array of numbers
function averageArray(numbers) {
    if (numbers.length === 0) return 0;
    return sumArray(numbers) / numbers.length;
}

// Function to find the longest string in an array
function longestString(strings) {
    return strings.reduce((longest, str) => (str.length > longest.length) ? str : longest, "");
}

// Function to filter strings longer than a given length
function stringsLongerThan(strings, length) {
    return strings.filter(str => str.length > length);
}

// Function to print numbers from 1 to n recursively
function printNumbersRecursive(n) {
    if (n <= 0) return;
    printNumbersRecursive(n - 1);
    console.log(n);
}

// Test cases
const numbers = [1, 2, 3, 4, 5];
const strings = ['say', 'hello', 'in', 'the', 'morning'];

console.log("Sum:", sumArray(numbers));
console.log("Average:", averageArray(numbers));
console.log("Longest string:", longestString(strings));
console.log("Strings longer than 3:", stringsLongerThan(strings, 3));
console.log("Numbers up to 5:");
printNumbersRecursive(5);

//Part 2:Thinking Methodically
const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Sort the array by age
const sortedByAge = [...data].sort((a, b) => a.age - b.age);

// Filter the array to remove entries with an age greater than 50
const filteredByAge = data.filter(entry => entry.age <= 50);

// Map the array to change the “occupation” key to “job” and increment every age by 1
const mappedData = data.map(entry => ({ ...entry, job: entry.occupation, age: parseInt(entry.age) + 1 }));

// Use the reduce method to calculate the sum of the ages
const sumOfAges = data.reduce((total, entry) => total + parseInt(entry.age), 0);

// Calculate the average age
const averageAge = sumOfAges / data.length;

console.log("Sorted by age:", sortedByAge);
console.log("Filtered by age (<= 50):", filteredByAge);
console.log("Mapped data (age + 1, job):", mappedData);
console.log("Sum of ages:", sumOfAges);
console.log("Average age:", averageAge);


//part 3: Thinking Critically//
// Function to increment age field of an object
function incrementAge(obj) {
    obj.age = obj.age ? parseInt(obj.age) + 1 : 1;
    obj.updated_at = new Date();
}

// Function to make a copy of an object and increment its age field
function copyAndIncrementAge(obj) {
    const newObj = { ...obj };
    incrementAge(newObj);
    return newObj;
}

// Test cases
const person = { id: "42", name: "Bruce", occupation: "Knight", age: "41" };

// Increment age field of the object
incrementAge(person);
console.log("Incremented age:", person);

// Make a copy of the object and increment age field of the copy
const copy = copyAndIncrementAge(person);
console.log("Copy with incremented age:", copy);
console.log("Original object:", person); // Original object remains unchanged

//Part 4:Thinking Practically//
// Sample employee data
const employees = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Function to add a new employee
function addEmployee(id, name, occupation, age) {
    employees.push({ id, name, occupation, age });
}

// Function to remove an employee by ID
function removeEmployeeById(id) {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
    }
}

// Function to update employee details
function updateEmployeeDetails(id, updatedInfo) {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees[index] = { ...employees[index], ...updatedInfo };
    }
}

// Function to calculate the average age of employees
function calculateAverageAge() {
    const sumOfAges = employees.reduce((total, emp) => total + parseInt(emp.age), 0);
    return sumOfAges / employees.length;
}

// Test cases
console.log("Before adding new employee:", employees);
addEmployee("99", "Clark", "Journalist", "35");
console.log("After adding new employee:", employees);
removeEmployeeById("42");
console.log("After removing employee with ID 42:", employees);
updateEmployeeDetails("48", { occupation: "Athlete", age: "26" });
console.log("After updating details of employee with ID 48:", employees);
console.log("Average age of employees:", calculateAverageAge());

//Part 5: Thinking back//

// Original To-Do List Application

let tasks = [];

function addTask(task) {
    tasks.push({ task, completed: false });
}

function removeTask(index) {
    tasks.splice(index, 1);
}

function markTaskAsCompleted(index) {
    tasks[index].completed = true;
}

function listAllTasks() {
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.task} - ${task.completed ? "Completed" : "Incomplete"}`);
    });
}

// Refactored To-Do List Application

const todoList = {
    tasks: [],
    addTask(task) {
        this.tasks.push({ task, completed: false });
    },
    removeTask(index) {
        this.tasks.splice(index, 1);
    },
    markTaskAsCompleted(index) {
        this.tasks[index].completed = true;
    },
    listAllTasks() {
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.task} - ${task.completed ? "Completed" : "Incomplete"}`);
        });
    }
};

// Test cases
todoList.addTask("Complete JavaScript assignment");
todoList.addTask("Study for exam");
todoList.addTask("Go for a run");

console.log("Original To-Do List:");
todoList.listAllTasks();

todoList.markTaskAsCompleted(0);
todoList.removeTask(1);

console.log("Updated To-Do List:");
todoList.listAllTasks();