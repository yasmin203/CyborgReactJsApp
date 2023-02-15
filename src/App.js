import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import {Header,Footer} from './sections/index'
import {Container} from './components/index'
import { Home, Profile } from './Pages'
import {useEffect} from 'react'
import { useTranslation, Trans } from 'react-i18next';
import "./App.css"
// const lngs = {
//   en: { nativeName: 'English' },
//   ar: { nativeName: 'Arabic' }
// };

const App = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const lang = navigator.language
    i18n.changeLanguage(lang)
  },[])
const lang =navigator.language
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