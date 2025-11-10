import React from 'react'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div>
      <h1>redux toolkit</h1>
      <Addtodo/>
      <Todos/>
    </div>
  )
}

export default App
