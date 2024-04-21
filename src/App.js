import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; 
import SomeModal from './SomeModal'; 
import Navbar from './Navbar'; 
import Footer from './Footer';

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
          <Route path="/" element={<HomePage showModal={showModal} />} />
          {/* További Route-k ha szükséges */}
        </Routes>
        <SomeModal isOpen={isModalOpen} onClose={hideModal} />
        <Footer />      
    </div>
  );
}

export default App;

