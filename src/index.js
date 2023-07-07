import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const initialState={value: 0};

const reducer=(state=initialState, action)=>{
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

// let state=reducer(initialState, {type: 'inc'});
// state=reducer(state, {type: 'inc'});
// state=reducer(state, {type: 'inc'});

const store=createStore(reducer);

const update=()=>{
  document.getElementById('counter').textContent = store.getState().value; // 
}

store.subscribe(update);

const inc=()=>{
  return {
    type:'inc'
  }
}

const dec=()=> ({type: 'dec'})

const rnd=(value)=>({type:'rnd', payload: value})

document.getElementById('inc').addEventListener('click',()=>{
  store.dispatch(inc());
})
document.getElementById('dec').addEventListener('click',()=>{
  store.dispatch(dec());
})

document.getElementById('rnd').addEventListener('click',()=>{
  const value=Math.floor(Math.random()*10);
  store.dispatch(rnd(value));
})




// console.log(store.getState())


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
