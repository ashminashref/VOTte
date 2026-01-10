
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/TempHome'
import Login from './components/Login/Login'
import UserProfile from './components/pages/UserProfile'

function App() {

  return (
    <>
  <Routes>
    <Route path='' element = {<Home/>}/>
    <Route path='login' element = {<Login/>} />
    <Route path='userprofile' element = {<UserProfile/>} />
  </Routes>
    </>
  )
}

export default App
