import React from 'react'
import Intro from "../components/Intro/Intro"
import Works from "../components/Works/Works"
import ListServices from "../components/ListServices/ListServices"
import ContactForm from '../components/ContactForm/ContactForm'

const Home = () => {
  return (
    <>
      <Intro />
      <Works />
      <ListServices />
      <ContactForm />
    </>
    
    
  )
}

export default Home