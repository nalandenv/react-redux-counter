import { DECREMENT, INCREMENT } from "./counterTypes"
const initialState = {
    counter: 0
}
const counterReducer = (state:any = initialState, action:any) => {
switch(action.type){
    case INCREMENT: return{
        ...state,
        counter: state.counter + 1
    }
    case DECREMENT: return{
        ...state,
        counter: state.counter - 1
    }
    default: return state;
}
}

export default counterReducer;