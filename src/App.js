import React from 'react'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import {Header,Footer} from './sections/index'
import {Container} from './components/index'
import { Home ,Profile} from './Pages'
const App = () => {
  return (
    <>
      <Router>
      <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            
            </Routes>
      </Container>
        <Footer />
        </Router>
      </>
  )
}

export default App