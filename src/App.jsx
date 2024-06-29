import AddToDo from "./Components/AddToDo";
// import ToDoItem1 from './Components/ToDoItem1';
// import ToDoItem2 from './Components/ToDoItem2';
import AppName from "./Components/AppName";
import Items from "./Components/Items";
import "./App.css";
import ToDoItems from "./Components/ToDoItems";

function App() {
  const EachItems = [
    {
      name: "Buy milk",
      date: "4/10/2024",
    },
    {
      name: "milk",
      date: "4/10/2024",
    },
    {
      name: "Buy Time",
      date: "11/11/1111",
    },
  ];

  return (
    <center className="todoContainer">
      <AppName></AppName>
      <AddToDo></AddToDo>

      {/* <ToDoItem1></ToDoItem1>
  <ToDoItem2></ToDoItem2>  */}
      {/* this is used when items file were not created  */}

      {/* <Items todoName="Geography" todoDate="1-7-2024"></Items>
  <Items todoName="History" todoDate="5-7-2024"></Items>
  <Items todoName="Economics" todoDate="19-7-2024"></Items> */}

      <ToDoItems EachItems={EachItems}></ToDoItems>
    </center>
  );
}

export default App;
