// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import Services from './components/Services'
import TestimonialSection from './components/Testimonial'
import Skills from './components/Skills'
import { StatsBar } from './components/StatsBar'
import Accordion from './components/Accordian'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <div className="w-full">
      {/* <Navbar /> */}
      <Hero />
      <Services/>
      <ProjectsSection/>
      <TestimonialSection/>
      <Skills/>
      <StatsBar/>
      <Accordion/>
      <BlogSection/>
      <Footer/>
    </div>
    </>
  )
}

export default App
