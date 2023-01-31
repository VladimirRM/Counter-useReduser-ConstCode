import React,{useReducer} from 'react';
import './App.css';

function reducer (state,action){
     return{
      counter: 1
     }
}

function App() {
  const [state,dispatch]= useReducer(reducer,{
    counter: 1
  })




  return (
    <div className="App">
        <button> You push me {state.counter} times</button>

    </div>
  );
}

export default App;
