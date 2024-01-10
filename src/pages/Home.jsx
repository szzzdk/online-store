import React from 'react'
import Intro from "../components/Intro/Intro"
import Works from "../components/Works/Works"
import ListServices from "../components/ListServices/ListServices"
import ContactForm from '../components/ContactForm/ContactForm'
import HowWork from '../components/HowWork/HowWork'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Intro />
      <Works />
      <ListServices />
      <ContactForm />
      <HowWork />
      <FAQ />
      <Footer />
    </>
    
    
  )
}

export default Home