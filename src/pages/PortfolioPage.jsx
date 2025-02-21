import React, { useState } from 'react'

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  ModalFl,
  Terminal,
} from "@components";

const PortfolioPage = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);
     const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
  return (
    <div className='relative z-0 bg-primary '>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar openModal={openModal} />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
    </div>
    <ModalFl isOpen={isModalOpen} onRequestClose={closeModal} title='Terminal'>
       <Terminal />
    </ModalFl>
  </div>
  )
}

export default PortfolioPage