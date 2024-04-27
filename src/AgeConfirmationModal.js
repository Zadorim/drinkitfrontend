import React from 'react';

const AgeConfirmationModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div style={{ position: 'fixed', top: 20, left: 20, right: 20, bottom: 20, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 5, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <p>Elmúltál már 18 éves?</p>
        <button onClick={() => onConfirm(true)}>Igen</button>
        <button onClick={() => onCancel(false)}>Nem</button>
      </div>
    </div>
  );
}

export default AgeConfirmationModal;