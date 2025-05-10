import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CoffeeOrder from './useStateComponent/CoffeeOrder'
import BasicStatePrimitiveValues from './useStateComponent/BasicStatePrimitiveValues'
import TogglingBoolean from './useStateComponent/TogglingBoolean'
import UserProfile from './useStateComponent/UserProfile '
import ToDoList from './useStateComponent/ToDoList'
import Form from './useStateComponent/Form'
import LazyInitialization from './useStateComponent/LazyInitialization'
import HandlingStateUpdatesBasedPreviousState from './useStateComponent/HandlingStateUpdatesBasedPreviousState'
import UserList from './useEffectComponent/UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserList />
    </>
  )
}

export default App
