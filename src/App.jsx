import { BrowserRouter } from "react-router-dom";

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
  TerminalModal,
  ModalFl,
  Terminal,
} from "./components";
import { FullPage, Slide } from "react-full-page";
import { useState } from "react";
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [historical, setHistorical] = useState([]);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (

        <BrowserRouter>
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
           <Terminal historical={historical} setHistorical={setHistorical} />
        </ModalFl>
      </div>
    </BrowserRouter>
  );
};

export default App;
