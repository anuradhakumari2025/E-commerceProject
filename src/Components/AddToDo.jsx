import { useState } from "react";

function AddToDo({ onNewItems }) {
  const [toDoName, setToDoName] = useState();
  const [toDoDueDate, setToDoDueDate] = useState();
  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setToDoName(event.target.value);
  };
  const handleDateChange = (event) => {
    // console.log(event.target.value);
    setToDoDueDate(event.target.value);
  };
  const handleAddBtnClicked = () => {
    onNewItems(toDoName, toDoDueDate);
    setToDoDueDate(""); //this will clear the box after adding items
    setToDoName("");
  };

  return (
    <div className="container anu-container">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter To do here"
            value={toDoName}
            onChange={handleNameChange}
          />
        </div>

        <div className="col-4">
          <input
            type="date"
            value={toDoDueDate}
            onChange={handleDateChange}
          ></input>
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-success anu-btn"
            // onClick={() => onNewItems("a","b")}
            onClick={handleAddBtnClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
