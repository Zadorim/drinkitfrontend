import React from 'react';

const SomeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 5 }}>
        <h2>Modális Tartalom</h2>
        <p>Ez a modális ablak tartalma.</p>
        <button onClick={onClose}>Bezár</button>
      </div>
    </div>
  );
}

export default SomeModal;
