import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero';
import SpecialMenu from '../components/SpecialMenu';
import Testimonial from '../components/Testimonial';
import About from '../components/About';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <>
        <Header />
        <Hero />
        <SpecialMenu />
        <Testimonial />
        <About />
        <Footer />
    </>
  )
}

export default Homepage