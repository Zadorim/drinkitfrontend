import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 5 }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 10 }}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
