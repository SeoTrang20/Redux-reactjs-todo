export const addTodo = (text) => {
    return {
      type: 'ADD_TODO',
      text,
    };
  };
  
  export const toggleTodo = (id) => {
    return {
      type: 'TOGGLE_TODO',
      id,
    };
  };
  
  export const deleteTodo = (id) => {
    return {
      type: 'DELETE_TODO',
      id,
    };
  };


  export const changeLg = (lg) => {
    return {
      type: 'CHANGE_LG',
      lg,
    }
  }