import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home.jsx"
import Home2 from './pages/Home/Home2.jsx'

const App = () => {
  return (
    <>
   <Router>
    <Routes>
        <Route  path='/'  element={<Home/>}/>
        <Route  path='/me'  element={<Home2/>}/>
    </Routes>

   </Router>
    </>
  )
}

export default App