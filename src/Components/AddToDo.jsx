function AddToDo(){
  return (
    <div className="container anu-container">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter To do here" />
          </div>

          <div className="col-4">
            <input type="date"></input>
          </div>

          <div className="col-2">
            <button type="button" className="btn btn-success anu-btn">
              Add
            </button>
          </div>
        </div>
        </div>
  );
}

export default AddToDo;