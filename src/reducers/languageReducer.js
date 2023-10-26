// src/reducers/languageReducer.js
const initialState = {
    language: 'en',
  };
  
  const languageReducer = (state = initialState, action) => {
    // Xử lý các action liên quan đến language
    console.log(action);
    switch (action.type) {
      case "CHANGE_LG":
        return {
          ...state,
          language:(state.language == 'en'?'vn':'en')
        }
      default:
          return state;
    }
  };
  
  export default languageReducer;