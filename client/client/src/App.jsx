import { useState } from 'react'
import './App.css'
import Form from "./components/form"

const API = "1ed1fa56d4b93f26d1176e875b4c26fe";

const Link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`



function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='container1'>
        <Form onSearchChange={handleOnSearch}/>
      </div>
  )
}

export default App
