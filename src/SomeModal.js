import React from 'react';

const SomeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 20, left: 20, right: 20, bottom: 20, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 5 }}>
        <h2>Szép napot!</h2>
        <p>Üdvözölünk a DrinkIt webáruházban! Folytathatod a böngészést.</p>
        <button style={{ padding: '10px 20px', backgroundColor: 'grey', color: 'white', border: 'none', borderRadius: '5px' }} onClick={onClose}>Bezár</button>
      </div>
    </div>
  );
}

export default SomeModal;
