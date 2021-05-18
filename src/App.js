import React,{useState,useEffect} from 'react'
import {BrowserRouter} from "react-router-dom"
import NavBar from './components/NavBar'
 
const App = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn)
  }

  useEffect(() => {
    if(localStorage.getItem('token')) {
      handleAuth()
    }
  }, [])

  return (
    <div>
      <h2> Welcome to Billing </h2>
      <BrowserRouter>
            <NavBar userLoggedIn={userLoggedIn} handleAuth= {handleAuth} />
      </BrowserRouter>
    </div>
  )
}

export default App
