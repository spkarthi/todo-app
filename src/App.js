import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm"; 

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo List", completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text: String(text), completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app">
      <Header />
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggleComplete={toggleComplete}
      />
      {/* Add a form or input to add new todos */}
    </div>
  );
};

export default App;
