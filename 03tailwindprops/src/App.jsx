import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let newArr = [1,2,3,4];

  return (
    <>
        <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>TailWind CSS</h1>
        <Card name="Honey" btnText="click me"/>
        <Card name="Deepika"/>
    </>
  )
}

export default App
