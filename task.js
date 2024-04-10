// TASK MANAGER

// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER;

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Arrays for storing tasks
const tasks = [`Charge MacBook`, `Master JavaScript`];

// For displaying tasks to the user
let showTasks = ``;

// For storing the value of a new task
let newTask;

// For storing the number of the task to be removed
let num;

// For storing the value of the removed task
let removed;

// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable
let userInput = prompt(menu);

// Loops and continues to display the menu until the user ends/closes the Task Manager (Until until the user enters CLOSE)
while (userInput !== "CLOSE") {
  if (userInput === `TASKS`) {
    tasks.forEach((element) => {
      showTasks += `${element}\n`;
    });
    alert(showTasks);
  } else if (userInput === `NEW`) {
    newTask = prompt(`Add New Task`);
    tasks.push(newTask);
  } else if (userInput === `REMOVE`) {
    removed = prompt(`Remove Task`);
    num = tasks.indexOf(removed);
    tasks.splice(num, 1);
  }
  // Displays the menu again
  userInput = prompt(menu);

  // This break can be commented out after the CLOSE feature is complete
  // break;
}

// Alerts the user that they have closed the program
alert(`Thank you for using Task Manager!`);
