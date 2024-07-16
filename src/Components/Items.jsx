const Items = ({ todoName, todoDate, onClickDelete }) => {
  return (
    <div className="container anu-container">
      <div className="row">
        <div className="col-6">{todoName}</div>

        <div className="col-4">{todoDate}</div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger anu-btn"
            onClick={() => onClickDelete(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Items;
