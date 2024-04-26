import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SomeModal from './SomeModal'; 
import Navbar from './Navbar'; 
import Footer from './Footer';
import Homepage from './Homepage';
import Login from './Login';
import Register from './Register';
import Modal from './Modal';
import AboutPage from './AboutPage';
import  SearchProvider  from './SearchContext';
import TermekekListaPage from './TermekekListPage';
import TermekekPage from './TermekekPage';
import AgeConfirmationModal from './AgeConfirmationModal';


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
    <SearchProvider>
      <div className="App">      
        <Navbar />
          <Routes>
            <Route path="/" element={<Homepage showModal ={showModal} />} />
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/AgeConfirmationModal" element={<AgeConfirmationModal/>}/>           
            <Route path="/TermekekListPage" element={<TermekekListaPage />} />
            <Route path="/TermekekPage" element={<TermekekPage />} />    
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
    </SearchProvider>
  );
}

export default App;

