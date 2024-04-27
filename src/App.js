import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SomeModal from './SomeModal';
import Navbar from './Navbar';
import Footer from './Footer';
import Homepage from './HomePage';
import Login from './Login';
import Register from './Register';
import Modal from './Modal';
import AboutPage from './AboutPage';
import SearchProvider from './SearchContext';
import TermekekListaPage from './TermekekListPage';
import TermekekPage from './TermekekPage';
import AgeConfirmationModal from './AgeConfirmationModal';



function App() {
  const [token, setToken] = useState('');

  // Állapotok és azok kezelői a modalok számára
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false);

  // Kezelő függvények a modalok megjelenítéséhez és elrejtéséhez
  const showModal = () => setIsModalOpen(true);
  const hideModal = () => setIsModalOpen(false);
  const handleLoginClick = () => setIsLoginModalOpen(true);
  const handleCloseModal = () => setIsLoginModalOpen(false);
  const handleRegisterClick = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);
  const onAgeCheck = () => setIsAgeModalOpen(true);

  // Eseménykezelők az AgeConfirmationModal komponenshez
  const handleAgeConfirm = () => {
    console.log("Age confirmed");
    setIsAgeModalOpen(false);
  };
  const handleAgeCancel = () => {
    console.log("Age confirmation cancelled");
    setIsAgeModalOpen(false);
  };

  return (
    <SearchProvider>
      <div className="App">
        <Navbar onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} onAgeCheck={onAgeCheck} />
        <Routes>
          <Route path="/" element={<Homepage showModal={showModal} isAgeModalOpen={isAgeModalOpen} onAgeConfirm={handleAgeConfirm} />} />
          <Route path="/Login" element={<Login setToken={setToken} />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path='/AgeConfirmationModal' element={<AgeConfirmationModal />}></Route>
          <Route path="/TermekekListPage" element={<TermekekListaPage />} />
          <Route path="/TermekekPage" element={<TermekekPage />} />
        </Routes>
        <SomeModal isOpen={isModalOpen} onClose={hideModal} />

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
