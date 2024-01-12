import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import MapScreen from './components/MapScreen'
import Options from './components/Options'
import NewSpotForm from './components/NewSpotForm'
import axios from 'axios'
import SpotExpanded from './components/spotExpanded'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import NotFound from './components/NotFound'

function App() {
  const [newSpotPosition, setNewSpotPosition] = useState(null)
  const [spotList, setSpotList] = useState([])
  const [user, setUser] = useState("")
  const [search, setSearch] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:3000/spot/getAll").then(res => {
      setSpotList([...res.data])
    })
  }, [])

  return (
    <div id='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/mapScreen" element={
            <div className='dashboard'>
              <MapScreen 
                newSpotPosition={newSpotPosition} 
                setNewSpotPosition={setNewSpotPosition}
                spotList={spotList}
                setSpotList={setSpotList}
                search={search}
              />
              <Options setSearch={setSearch} search={search}/>
            </div>} />
            <Route path='/newSpot' element={<NewSpotForm newSpotPosition={newSpotPosition} user={user}/>} />
            <Route path="/spotExpanded/:spotName" element={<SpotExpanded user={user}/>}/>
            <Route path="/" element={<Login setUser={setUser}/>} />
            <Route path="/register" element={<Register setUser={setUser}/>} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
