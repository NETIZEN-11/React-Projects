import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
//  let counter  = 15

const min = 0;
const max = 20;

//  const addvalue = () =>{
//   console.log("clicked", counter)
//   // counter = counter +1
//   setCounter(counter+1)
  
//  }
//  const removevalue = () =>{
//   setCounter(counter-1)
//  }
const addvalue = () => {
    setCounter((prev) => (prev < max ? prev + 1 : prev));
  };

  const removevalue = () => {
    setCounter((prev) => (prev > min ? prev - 1 : prev));
  };


  return (
    <>
      <h1>chai aur reacts</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addvalue}>add value</button>

      <br />
      <button onClick={removevalue}>remove value </button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
