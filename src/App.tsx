import React, { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import LoginModal from './components/LoginModal'
import RegisterModal from './components/RegisterModal'
import AddPartModal from './components/AddPartModal'

function App() {

  const [user, setUser] = useState("admin")
  const [builds, setBuilds] = useState([])

  return (
    <div className="App">
      <h1 className="text-red-600">RC Part Picker</h1>
      <AddPartModal />
      <LoginModal setUser={setUser}/>
      <RegisterModal />
      <Banner user={user} setUser={setUser} setBuilds={setBuilds} />

    </div>
  )
}

export default App
