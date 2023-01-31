  import { INCREMENT,DECREMENT } from "./boilerPlate";
  export default function reducer(state, action) {
    switch (action.type) {
      case INCREMENT:
        return {
          counter: state.counter + action.payload,
        };
      case DECREMENT:
        return {
          counter: state.counter - action.payload,
        };
        default:
          return{
            ...state
          }
    }
  }