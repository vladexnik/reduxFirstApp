import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducer';
import {inc,dec,rnd} from './actions';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store=createStore(reducer);

const {dispatch, subscribe, getState,}=store;   

const update=()=>{
  document.getElementById('counter').textContent = getState().value; // 
}

subscribe(update);

const incDispatch=()=> dispatch(inc())
const decDispatch=()=> dispatch(dec())
const rndDispatch=(value)=> dispatch(rnd(value))


document.getElementById('inc').addEventListener('click', incDispatch)
document.getElementById('dec').addEventListener('click', decDispatch)
document.getElementById('rnd').addEventListener('click',()=>{
  const value=Math.floor(Math.random()*10);
  rndDispatch(value);
})
// console.log(store.getState())


// let state=reducer(initialState, {type: 'inc'});
// state=reducer(state, {type: 'inc'});
// state=reducer(state, {type: 'inc'});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
