import { React } from "react";
import "../App.css";

function Todo({ toDo, index, completeToDo, removeToDo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: toDo.isCompleted ? "line-through" : "" }}
    >
      {toDo.text}
      <div>
        <button onClick={() => completeToDo(index)}>Complete</button>
        <button onClick={() => removeToDo(index)}>&times;</button>
      </div>
    </div>
  );
}

export default Todo;
