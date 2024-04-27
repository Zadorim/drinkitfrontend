import React from 'react';
import SomeModal from './SomeModal';

const Homepage = ({ showModal }) => {
  return (
    <div className="navbar-brand">
      <p>Üdvözöljük weboldalunkon!</p>
      <button onClick={showModal}>Bejelentkezés</button>
      <SomeModal isOpen={showModal} onClose={() => showModal(false)}>
        <p>További információk és vásárlási lehetőségek.</p>
      </SomeModal>
    </div>
  );
}

export default Homepage;
