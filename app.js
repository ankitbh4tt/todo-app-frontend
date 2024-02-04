import render from "./render.js";
import {addTodo} from './store.js';
import store from './store.js';

window.addEventListener("todosChange",()=>{
  console.log("todos changes fired!!!");
  render();
});

//todos;[array]  //refrence type
render();

//form get 
const form = document.querySelector("#form")
const todoTitleInput = document.querySelector(".todo-title-input")
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const todoTitle = todoTitleInput.value;
  const newTodo = {id:crypto.randomUUID,todoTitleInput:todoTitle,completed:false};
  addTodo(newTodo);
})
