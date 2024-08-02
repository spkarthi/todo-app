import React, { useState } from "react";
import "./TodoList.css";

const TodoList = ({ todos, onDelete, onToggleComplete }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <span
              className="todo-text"
              onClick={() => onToggleComplete(todo.id)}
            >
              {todo.text}
            </span>
            <button className="delete-button" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
