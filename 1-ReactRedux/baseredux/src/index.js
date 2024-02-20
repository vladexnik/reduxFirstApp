import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';
import App from './App';
import reducer from './reducer';
import * as actions from './actions';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const initialState=0;

// const reducer=(state=0,action)=>{
//   switch(action.type){
//     case 'inc': 
//       return state+1
//     case 'dec': 
//       return  state-1
//     default: 
//       return state;
//   }
 
// }

// let state=reducer(initialState, {type: 'inc'});
// // state=reducer(state, {type: 'inc'});
// // state=reducer(state, {type: 'inc'});
// console.log(state);

const store=createStore(reducer);
// store.subscribe(()=>{
//   console.log(store.getState());
// })

// store.dispatch({type: 'inc'})
// store.dispatch({type: 'inc'})



const {dispatch, subscribe, getState,}=store;   

const update=()=>{
  document.getElementById('counter').textContent = getState().value; // 
}

subscribe(update);

// const bindActionCreator=(creator, dispatch)=>(...args)=>{
//   dispatch(creator(...args))
// }

const {inc, dec, rnd}=bindActionCreators(actions, dispatch);
// const decDispatch=bindActionCreators(dec, dispatch)
// const rndDispatch=bindActionCreators(rnd, dispatch)

document.getElementById('inc').addEventListener('click', inc)
document.getElementById('dec').addEventListener('click', dec)
document.getElementById('rnd').addEventListener('click',()=>{
  const value=Math.floor(Math.random()*10);
  rnd(value)
})
// console.log(store.getState())

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
