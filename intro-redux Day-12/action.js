//Action Types 
export const ADD_TODOS = "ADDTODOS"


//Action Creators
export const addtodos = (title)=>{
    return {
        type : ADD_TODOS,
        payload:title
    }
}