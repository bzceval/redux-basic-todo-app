// kural 1: initial state
export const initialState = { counter: 0 }

// kural 2 : reducer oluşturulur
// action = {type, payload}
// const [counter, setCounter] = useState()

export const reducer = (state=initialState, {type}) => {
    switch (type) {
        case "ARTIR": 
            return {counter: state.counter + 1}
        case "AZALT":
            return {counter: state.counter - 1}
        case "RESET":
            return initialState
        default:
            return state
    }
}