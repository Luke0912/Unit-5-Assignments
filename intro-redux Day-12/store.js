// import legacy_createStore from "redux"
import { addtodos } from "./action.js";
import { initState, reducer } from "./reducer.js";

const store = Redux.createStore(reducer, initState);
const textbox = document.getElementById("textbox");
const tododiv = document.getElementById("changetext");
const addtodo = document.getElementById("addTodo");
const deletetodo = document.getElementById("deletetodo");

addtodo.addEventListener("click", add);

function add() {
  store.dispatch(addtodos(textbox.value));
  console.log("initialStore", store.getState());
  console.log(textbox.value);
  tododiv.innerHTML=[]
  store.getState().todos.map((e) => {
    const markup = `<h1>${e}</h1>`;
    tododiv.insertAdjacentHTML("beforeend", markup);
  });
}

deletetodo.addEventListener("click", delet);

function delet() {
console.log("hii")
  }

