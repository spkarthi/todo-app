import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ onAddTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      onAddTodo(newTodoText); 
      setNewTodoText('');
    }
  };

  return (
    <form className='todo-form'   onSubmit={handleSubmit}>
      <input className='todo-input'
        type="text" 
        value={newTodoText} 
        onChange={(e) => setNewTodoText(e.target.value)} 
        placeholder="Add a new todo" 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;