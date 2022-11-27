import { ARTIR, AZALT, RESET } from "../types/counterTypes"

// kural 1: initial state
const initialState = { counter: 0 }

// kural 2 : reducer oluşturulur
// action = {type, payload}
// const [counter, setCounter] = useState()

const counterReducer = (state=initialState, {type}) => {
    switch (type) {
        case ARTIR: 
            return {counter: state.counter + 1}
        case AZALT:
            return {counter: state.counter - 1}
        case RESET:
            return initialState
        default:
            return state
    }
}

export default counterReducer