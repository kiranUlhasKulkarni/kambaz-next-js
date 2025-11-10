import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const { todos } = useSelector((state: RootState) => state.todos);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables" className="p-3 border rounded" style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-success mb-3">Add Element</button>

      <div className="d-flex flex-column gap-2">
        {array.map((item, index) => (
          <div key={index} className="p-2 border rounded d-flex justify-content-between align-items-center bg-light">
            <span>{item}</span>
            <button onClick={() => deleteElement(index)} className="btn btn-danger btn-sm">Delete</button>
          </div>
        ))}
      </div>

      <ListGroup className="mt-4">
        {todos.map((todo: any) => (
          <ListGroupItem key={todo.id}>{todo.title}</ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
