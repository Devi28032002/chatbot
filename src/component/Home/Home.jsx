import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import AboutTest from '../abouttesting/AboutTest'
import Service from '../Service/Service'
import Contact from '../contact/Contact'
import FAQ from '../FAQ/FAQ'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutTest />
      <Service />
      <Contact />
      <FAQ/>
      <Footer/>

    </div>
  )
}

export default Home
