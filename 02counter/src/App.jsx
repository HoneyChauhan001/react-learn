import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(10);
  const warningMsg = document.getElementById('warning');
  const increaseValue = () => {
    if(counter >= 20){
      setCounter(counter);
      warningMsg.style.display = 'block';
      warningMsg.innerHTML = "Max value reached, Cannot increase furthur";
    } else {
      setCounter(counter + 1);
      warningMsg.style.display = 'none';
    }
  }

  const decreaseCounter = () => {
    if(counter <= 0){
      setCounter(counter);
      warningMsg.style.display = 'block';
      warningMsg.innerHTML = "Min value reached, Cannot decrease furthur";
    }else {
      setCounter(counter-1);
      warningMsg.style.display = 'none';
    }
  }


  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={increaseValue}>Increase Counter : {counter}</button>
      <br />
      <button onClick={decreaseCounter}>Decrease Counter : {counter}</button>
      <h2 id="warning"></h2>
    </>
  )
}

export default App
