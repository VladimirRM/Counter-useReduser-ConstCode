import React,{useReducer} from 'react';
import './App.css';

function reducer (state,action){
 
  switch(action.type){
    case 'increment':
      return{
        counter:state.counter + 1
      }
  }
}

function App() {
  const [state,dispatch]= useReducer(reducer,{
    counter: 1
  })

const handlerClick =()=>{
    dispatch({
      type:'increment',
      payload:1

    })
}


  return (
    <div className="App">
        <button onClick={handlerClick }> You push me {state.counter} times</button>
        <button onClick={handlerClick }> You push me {state.counter} times</button>

    </div>
  );
}

export default App;
