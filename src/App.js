import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
// components 
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import User from './components/pages/User'
import NotFound from './components/notFound/NotFound'
import { GithubProvider } from './context/GithubContext'
import { AlertProvider } from './context/AlertContext'
const App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between', height:'100vh'}}>
            <Navbar/>
              <main style={{padding:"5rem"}}>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/user/:login" element={<User/>} />
                  <Route path="/notfound" element={<NotFound/>}/>
                  <Route path="/*" element={<NotFound/>}/>
                </Routes>
              </main>
            <Footer/>
          </div>  
        </Router>
      </AlertProvider>
    </GithubProvider>
    
  )
}

export default App
