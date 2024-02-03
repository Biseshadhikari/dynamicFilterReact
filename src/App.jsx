import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Index from './pages/Index'
import Contact from './pages/Contact'
function App() {
  return (
    <div>
      <Nav/>
      <Router>
        <Routes>
          
          <Route path='/' element= {<Index/>}>
            <Route path='/Home' element= {<Home/>}/>
            <Route path='/Contact' element= {<Contact/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
