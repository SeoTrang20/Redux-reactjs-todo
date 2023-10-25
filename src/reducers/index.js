// src/reducers/index.js
const initialState = {
    todos: [],
    loading: false, // Trạng thái loading mặc định là false
    language: 'en',
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          loading: true, // Bắt đầu loading
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              text: action.text,
              completed: false,
            },
          ],
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          loading: true, // Bắt đầu loading
          todos: state.todos.map((todo) =>
            todo.id === action.id
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        };
      case 'DELETE_TODO':
        return {
          ...state,
          loading: true, // Bắt đầu loading
          todos: state.todos.filter((todo) => todo.id !== action.id),
        };
      case 'END_LOADING':
        return {
          ...state,
          loading: false, // Kết thúc loading
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;