import { useState } from 'react'
import './style/App.css'
import Form from "./components/form"

const API = "1ed1fa56d4b93f26d1176e875b4c26fe";

//const Link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`



function App() {
  
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
      <div className='container1'>
        <Form onSearchChange={handleOnSearchChange}/>
      </div>
  )
}

export default App
