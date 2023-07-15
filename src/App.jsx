import React from 'react'
import './index.css'
import Nav from './components/Nav'
import Hero from './views/Hero'
import About from './views/About'
import Utilities from './views/Utilities'
import Tokenomics from './views/Tokenomics'
import Roadmap from './views/Roadmap'
import Contact from './views/Contact'
import Footer from './components/Footer'
import Movie from './views/Movie'

const App = () => {
  return (
    <>
      <div className="bg-blk w-full h-screen text-wht/70 font-nunito">
        <Nav />
        <div className="overflow-x-hidden">
          <Hero />
          <About />
          <Utilities />
          <Tokenomics />
          <Roadmap />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App