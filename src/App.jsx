import AddToDo from "./Components/AddToDo";
// import ToDoItem1 from './Components/ToDoItem1';
// import ToDoItem2 from './Components/ToDoItem2';
import AppName from "./Components/AppName";
// import Items from "./Components/Items";
import "./App.css";
import ToDoItems from "./Components/ToDoItems";
import { useState } from "react";
import WelcomeMsg from "./Components/WelcomeMsg";

function App() {
  // const initialEachItems = [
  //   {
  //     name: "Read Geography",
  //     date: "4/10/2024",
  //   },
  //   {
  //     name: "Make a Website using ReactJs",
  //     date: "4/10/2024",
  //   },
  //   {
  //     name: "Watch Video of History",
  //     date: "11/11/1111",
  //   },
  // ];

  // const [EachItems, setEachItems] = useState(initialEachItems);
  const [EachItems, setEachItems] = useState([]);
  const handleNewItems = (itemName, itemDueDate) => {
    // console.log(` new item added is: ${itemName}, date: ${itemDueDate}`);
    const newToDoItems = [
      ...EachItems,
      {
        name: itemName,
        date: itemDueDate,
      },
    ];
    setEachItems(newToDoItems);
  };

  const handleDeleteBtn = (toDoItemName) =>{
    console.log(`item deleted is ${toDoItemName}`);
    const newToDoItems = EachItems.filter(item => item.name !== toDoItemName);//filter drop false values and keep true values in array
    setEachItems(newToDoItems);
  }

  return (
    <center className="todoContainer">
      <AppName></AppName>
      <AddToDo onNewItems={handleNewItems}></AddToDo>

      {/* <ToDoItem1></ToDoItem1>
  <ToDoItem2></ToDoItem2>  */}
      {/* this is used when items file were not created  */}

      {/* <Items todoName="Geography" todoDate="1-7-2024"></Items>
  <Items todoName="History" todoDate="5-7-2024"></Items>
  <Items todoName="Economics" todoDate="19-7-2024"></Items> */}

      <ToDoItems EachItems={EachItems} onClickDelete={handleDeleteBtn}></ToDoItems>
      {EachItems.length === 0 && <WelcomeMsg></WelcomeMsg> }
      {/* Welcome msg will only show if length of EachItems will 0 */}
    </center>
  );
}

export default App;
