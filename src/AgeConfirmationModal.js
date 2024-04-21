import React from 'react';

const AgeConfirmationModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 5, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <p>Biztosan elmúltál 18 éves?</p>
        <button onClick={() => onConfirm(true)}>Igen</button>
        <button onClick={() => onCancel()}>Mégse</button>
      </div>
    </div>
  );
}

export default AgeConfirmationModal;
