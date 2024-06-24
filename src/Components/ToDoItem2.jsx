function ToDoItem2(){
  let todoName = 'Buy milk';
  let todoDate = '4/10/2024';

return (

  
  <div className="container anu-container">
        <div className="row">
          <div className="col-6">
             {todoName}
          </div>

          <div className="col-4">
            {todoDate}
          </div>

          <div className="col-2">
            <button type="button" className="btn btn-danger anu-btn">
              Delete
            </button>
          </div>
        </div>
        </div>
)
}
 export default ToDoItem2;