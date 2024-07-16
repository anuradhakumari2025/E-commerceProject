import Items from "./Items";

const ToDoItems = ({ EachItems, onClickDelete }) => {
  return (
    <div>
      {EachItems.map((item) => (
        <Items
        key={item.name}
          todoName={item.name}
          onClickDelete={onClickDelete}
          todoDate={item.date}
        ></Items>
      ))}
      {/* <Items todoName="Geography" todoDate="1-7-2024"></Items>
      <Items todoName="History" todoDate="5-7-2024"></Items> */}
    </div>
  );
};
export default ToDoItems;
