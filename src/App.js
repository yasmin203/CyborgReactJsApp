import React from 'react'
import "./App.css"
import {Header,Hero,MostPopular,Footer, GamingLiberary} from './sections/index'
import {Container} from './components/index'
const App = () => {
  return (
      <>
      <Header />
      <Container>
        <Hero />
        <MostPopular/>
        <GamingLiberary/>
      </Container>
      <Footer />
      </>
  )
}

export default App