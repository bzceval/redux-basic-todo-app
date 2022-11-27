import { combineReducers, legacy_createStore as createStore } from "redux";
import counterReducer from "./reducers/counterReducer"
import todoReducer from "./reducers/todoReducer"

// storeni kur
// export const store = createStore()
// reducer birleştirme = combineReducer()
const rootReduce = combineReducers({
    count: counterReducer,
    //eklemek istediğim reducer key: value şeklinde sadece ekle
    todo: todoReducer
})
export const store = createStore(rootReduce)







/*************/
// // kural 1: initial state
// export const initialState = { counter: 0 }
// // kural 2 : reducer oluşturulur
// // action = {type, payload}
// // const [counter, setCounter] = useState()

// export const reducer = (state=initialState, {type}) => {
//     switch (type) {
//         case "ARTIR": 
//             return {counter: state.counter + 1}
//         case "AZALT":
//             return {counter: state.counter - 1}
//         case "RESET":
//             return initialState
//         default:
//             return state
//     }
// }

