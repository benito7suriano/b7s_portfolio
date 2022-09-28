import React from 'react'
import { Navbar } from './components'

import { About, Testimonial, Footer, Header, Skills, Work } from './container'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
