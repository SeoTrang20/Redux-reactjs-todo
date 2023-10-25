// src/components/TodoList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../actions';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(todos);
    console.log('loading : ',loading);
  },[todos])

  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
