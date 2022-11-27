import { ADD_TODO } from "../types/todoTypes";

const initialState = {
    todoList: [{id: new Date().getTime(), text: "", completed: false}]
}

const todoReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ADD_TODO: 
        return { todoList: [...state.todoList, {id: new Date().getTime(), text: payload, completed: false }] }
        // case DELETE_TODO:
        // case CLEAR_TODO:
        // case TOGGLE_TODO:
        default:
            return state
    }
}
export default todoReducer