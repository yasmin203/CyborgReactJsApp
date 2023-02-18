import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import {Header,Footer} from './sections/index'
import {Container} from './components/index'
import { Home, Profile } from './Pages'
import { useTranslation } from 'react-i18next';

import "./App.css"

const App = () => {
  const { t, i18n } = useTranslation();
    document.body.dir = i18n.dir();
  return (
    <>
      <Router basename={"/CyborgReactJsApp"}>
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