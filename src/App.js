import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Homepage from './Homepage';
import Login from './Login';
import Register from './Register';
import Modal from './Modal';
import AboutPage from './AboutPage';
import SearchProvider from './SearchContext';
import TermekekSinglePage from './TermekekSinglePage';
import TermekekListPage from './TermekekListPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [token, setToken] = useState('');

  // Állapotok és azok kezelői a modalok számára
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);  

  // Kezelő függvények a modalok megjelenítéséhez és elrejtéséhez
  const showModal = () => setIsModalOpen(true);  
  const handleLoginClick = () => setIsLoginModalOpen(true);
  const handleCloseModal = () => setIsLoginModalOpen(false);
  const handleRegisterClick = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);  
 
  
  return (
    <SearchProvider>
      <div className="App">
        <Navbar onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick}  />
        <Routes>
          <Route path="/" element={<Homepage showModal={showModal}  />} />
          <Route path="/Login" element={<Login setToken={setToken} />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/AboutPage" element={<AboutPage />} />        
          <Route path="/Termekek/Új-Termek" element={<TermekekSinglePage />} />
          <Route path="/Termekek" element={<TermekekListPage />} />
        </Routes>      
        <div>
          <Modal isOpen={isLoginModalOpen} onClose={handleCloseModal}>
            <Login />
          </Modal>
        </div>
        <div>
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
