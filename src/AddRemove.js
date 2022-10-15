// // import {displayTask} from './index.js';

// // const textInput = document.getElementById('textInput');
// // add task
// const addList = (e) => {
//   e.preventDefault();
//   const userInput = textInput.value.trim();
//   textInput.value = '';
//   if (!userInput) return;
//   if (!todos) {
//     todos = [];
//   }
//   const list = {
//     description: userInput,
//     completed: false,
//     index: todos.length + 1,
//   };
//   todos.push(list);
//   localStorage.setItem('todos', JSON.stringify(todos));
//   displayTask();
// };


// export {addList};