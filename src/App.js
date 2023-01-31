import React, { useReducer } from "react";
import "./App.css";
import reducer from "./reducer";
import { increment,decrement } from "./actions";


// const increment = (payload) => ({
//   type: INCREMENT,
//   payload,
// });






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
