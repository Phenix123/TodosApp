import { React, useState } from "react";
import "./App.css";
import ToDo from "./components/Todo";
import TodoForm from "./components/ToDoForm";
//import { data } from "./data.json";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Shoping",
      isCompleted: false,
    },
    {
      text: "Build really big house",
      isCompleted: false,
    },
    {
      text: "Plant a tree",
      isCompleted: false,
    },
    {
      text: "Raise a son",
      isCompleted: true,
    },
  ]);
  //const [todos, setTodos] = useState(data);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <ToDo
              key={index}
              index={index}
              toDo={todo}
              completeToDo={completeTodo}
              removeToDo={removeTodo}
            />
          ))}
          <TodoForm addToDo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
