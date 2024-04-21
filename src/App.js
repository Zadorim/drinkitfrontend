import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SomeModal from './SomeModal'; 
import Navbar from './Navbar'; 
import Footer from './Footer';
import Homepage from './Homepage';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">      
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage showModal={showModal} />} />
          {/* További Route-k ha szükséges */}
        </Routes>
        <SomeModal isOpen={isModalOpen} onClose={hideModal} />
        <Footer />      
    </div>
  );
}

export default App;

