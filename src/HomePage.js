import React, { useState } from 'react';
import SomeModal from './SomeModal';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal =() => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const navigate = useNavigate();  
    navigate('/');
    
  return (
    <div className="navbar-brand">
      <p>Üdvözöljük weboldalunkon!</p>
      <button onClick={openModal}>Nézzen szét</button>
      <SomeModal isOpen={isModalOpen} onClose={closeModal}>
        <p>További információk és vásárlási lehetőségek.</p>
      </SomeModal>
    </div>
  );
}

export default Homepage;
