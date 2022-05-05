import {  ADD_TODOS } from "./action.js"

export const initState  = {
    todos:[]
}

export const reducer = (store,action)=>{
    switch(action.type){
        case ADD_TODOS:
            return{
                ...store,todos:[...store.todos,action.payload]
            }
            default:
                return store;
    }
}