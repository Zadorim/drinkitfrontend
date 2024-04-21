import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SomeModal from './SomeModal'; 
import Navbar from './Navbar'; 
import Footer from './Footer';
import Homepage from './Homepage';
import Login from './Login';
import Register from './Register';
import Modal from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };


  return (
    <div className="App">      
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage showModal={showModal} />} />
          <Route path="/" element={<Login/>}/>
          <Route path="/" element={<Register/>}/>
          {/* További Route-k ha szükséges */}
        </Routes>
        <SomeModal isOpen={isModalOpen} onClose={hideModal} />
        <div>
          <button onClick={handleLoginClick}>Bejelentkezés</button>
          <Modal isOpen={isLoginModalOpen} onClose={handleCloseModal}>
          <Login />
          </Modal>
      </div>
      <div>
        <button onClick={handleRegisterClick}>Regisztráció</button>
        <Modal isOpen={isRegisterModalOpen} onClose={closeRegisterModal}>
          <Register onRegister={closeRegisterModal} />
        </Modal>
      </div>
        <Footer />      
    </div>
  );
}

export default App;

