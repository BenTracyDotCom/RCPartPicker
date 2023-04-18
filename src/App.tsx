import React, { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import LoginModal from './components/LoginModal'

function App() {

  const [user, setUser] = useState("")
  const [builds, setBuilds] = useState([])

  return (
    <div className="App">
      <h1 className="text-red-600">RC Part Picker</h1>
      <LoginModal setUser={setUser}/>
      <Banner user={user} setUser={setUser} setBuilds={setBuilds} />
    </div>
  )
}

export default App
