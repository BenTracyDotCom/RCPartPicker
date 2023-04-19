import React, { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import LoginModal from './components/LoginModal'
import RegisterModal from './components/RegisterModal'
import AddPartModal from './components/AddPartModal'
import Build from './components/build/Build.jsx'
import Homepage from './components/homepage/Homepage.jsx'
import SearchModal from './components/search/SearchModal.jsx'

function App() {

  const [user, setUser] = useState("")
  const [builds, setBuilds] = useState([])
  const [build, setBuild] = useState({name: '', owner: '', components: [] })
  const [page, setPage] = useState('home')

  return (
    <div className="App">
      <h1 className="text-red-600">RC Part Picker</h1>
      <Banner user={user} setUser={setUser} setBuilds={setBuilds} builds={builds} setBuild={setBuild} setPage={setPage}/>
      <SearchModal build={build} setBuild={setBuild}/>
      <AddPartModal />
      <LoginModal setUser={setUser} setBuilds={setBuilds}/>
      <RegisterModal />
      {page === 'home' && <Homepage />}
      {page === 'build' && <Build build={build} user={user} setBuild={setBuild}/>}

    </div>
  )
}

export default App
