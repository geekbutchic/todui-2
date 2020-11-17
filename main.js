const readline = require('readline');
const data = require('./data.js');
// Step 1.

// const todos = require('./data.js');
// // module inside node 
// // file requires ./ the path

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Remove all completed todos.
4. Toggle a todo's completion status.
5. Toggle a todo's priority.
6. Quit.

`;

// // 
// const handleMenu = function (cmd) {
//   if (cmd === '6') {
//     console.log('Quitting!')
//     interface.close();
//   } else {
//     console.clear();
//     console.log('Type 6 to quit!');
//     interface.question(menu, handleMenu);
//   }
// };

const handleMenu = function (cmd) {
  switch (cmd) {
    case '6':
      return 'Quitting!';

    case '1':
      return 'Add a todo.';

    case '2':
      return 'Remove a to do.';

    case '3':
      return 'Remove all completed todos.';

    case '4':
      return "Toggle a todo's completion status.";

    case '5':
      return "Toggle a todo's priority."
      interface.question(menu, handleMenu);
    default:
      return 'Type in 1-6 to use todo application.';
    // default is what would print out non of the values match.
  }
}











const printToDos = () => {
  console.log('Here are your todos!')
  // Step 2.
  for (todo of data.todos) {
    // Step 3.
    console.log('* ' + todo.text);
    // Step 5.
  }
}
// console.log(encoding.join(' '));
console.clear()
// Step 4.
printToDos();

// // return prints one 
// // todo[i]

interface.question(menu, handleMenu);


// This is a loop function that pulls from data.js and runs it in
// our terminal.

// Step 1. Bring in data from (./data.js) file path is needed
// Step 2. Create for of loop to loop through (object)
//         remember to engage the the key of the object.
//         Flow Path data.todo + key.text in this case
//         Loop through todo of data.todos
// Step 3. Prints out (todo.text) with console.log('Here are your todos!)
// Step 4. Call printToDos(); Function 
// Step 5. Add '* ' space to todo.text to add bullet points.
// 
