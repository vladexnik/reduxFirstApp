
const initialState={value: 0};
const reducer=(state=initialState, action)=>{ // ЧИСТАЯ ФУНКЦИЯ
    switch(action.type){
      case 'inc': 
        return {
          ...state,  // создаём новый объект
          value: state.value+1 // меняем св-во value
        };// нужно вернуть объект тк стейт - объект
      case 'dec': 
      return {
        ...state,  // создаём новый объект
        value: state.value-1 // меняем св-во value
      };
      case 'rnd':
        return {
          ...state,  // создаём новый объект
          value: state.value*action.payload // меняем св-во value
        };
      default: 
        return state;     
    }
  }

  export default reducer;