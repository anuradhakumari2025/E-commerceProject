import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import AddToDo from './Components/AddToDo';
import ToDoItem1 from './Components/ToDoItem1';
import ToDoItem2 from './Components/ToDoItem2';
import AppName from './Components/AppName';
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return ( <center className="todoContainer">
  <AppName></AppName>
  <AddToDo></AddToDo>
  <ToDoItem1></ToDoItem1>
  <ToDoItem2></ToDoItem2> 
</center>
  );
}

export default App;
