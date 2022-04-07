import {append} from "./append"
import "./index.css"
import "./note.jpg"

const input =  document.getElementById("input")
// const showtext  = document.getElementById("showtext")
const show  = document.getElementById("show")

const button = document.getElementById("click")

button.addEventListener("click",function(event){
    append(input.value,show)
    console.log(input.value)
}) 