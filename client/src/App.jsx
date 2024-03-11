import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Landing from './views/Landing/Landing'
import Home from './views/Home/Home'
import Detail from './views/Detail/Detail'
import Create from './views/Create/Create'


import './App.css'

function App() {
  
  return (
    
   <div className='App'>
   <Routes>
    <Route path= '/' Component= {Landing}/>
    <Route path='/countries' Component= {Home} />
    <Route path='/countries/:id' Component= {Detail} />
    <Route path='/create' Component= {Create} />
   </Routes>
    
   </div>
  )
}

export default App;
