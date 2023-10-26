// src/components/TodoList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { addTodo, changeLg, deleteTodo, toggleTodo } from '../actions';

const TodoList = () => {

  const { t , i18n} = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todo.todos);
  const loading = useSelector((state) => state.todo.loading);
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("todos :",todos);
    console.log('loading : ',loading);
    console.log('language : ',language);
  },[todos,language])

  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  

  const lg = {
    title:{
      en:'Todo List',
      vn:'Quản lí công việc'
    },
    btnAdd:{
      en:'Add Todo',
      vn:'Thêm công việc'
    },
    btnToggle:{
      en:'Toggle',
      vn:'Chuyển đổi'
    },
    btnDelete:{
      en:'Delete',
      vn:'Xóa'
    },
    btnChangeLanguage:{
      en:'Change Language',
      vn:'Thay Đổi Ngôn Ngữ'
    }
  }

  console.log(lg.title[language]);
  // console.log(lg.title+'.'+ language);

  const handleChangeLanguage = () => {
    dispatch(changeLg());
  }

  return (
    <div>
      <button onClick={() => changeLanguage('vn')}>Viet nam</button>
      <button onClick={() => changeLanguage('en')}>English</button>
      <h2>test </h2>
      <h5 class="card-title">{t('content.functional')}</h5>
      <h1>
        {
          lg.title[language]
        }
      </h1>
      <button
        onClick={handleChangeLanguage}
      >
        {
          lg.btnChangeLanguage[language]
        }
      </button>
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
