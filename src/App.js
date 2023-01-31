import React, { useReducer } from "react";
import "./App.css";

const DECREMENT = "decrement";
const INCREMENT = "increment";

// const increment = (payload) => ({
//   type: INCREMENT,
//   payload,
// });

const increment = payload =>{
  return {
    type:INCREMENT,
    payload,
  }
}
const decrement = payload =>{
  return {
    type:DECREMENT,
    payload,
  }

}


function reducer(state, action) {
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

function App() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 1,
  });

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement(2))}>-1</button>
      <button onClick={() => dispatch(decrement(1))}>-2</button>

      <span>{state.counter}</span>

      <button onClick={() => dispatch(increment(1))}>+1</button>
      <button onClick={() => dispatch(increment(2))}>+2</button>
    </div>
  );
}

export default App;
