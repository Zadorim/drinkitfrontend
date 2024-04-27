import React, { useState, useEffect } from 'react';
import AgeConfirmationModal from './AgeConfirmationModal';
import SomeModal from './SomeModal';

const Homepage = ({ showModal, isAgeModalOpen, onAgeConfirm, onAgeCancel }) => {
  const [isOver18, setIsOver18] = useState(null);
  const [showAgeModal, setShowAgeModal] = useState(isOver18 === null);
  const [showSomeModal, setShowSomeModal] = useState(false);
  
  useEffect(() => {
    if (isOver18 !== null) {
      console.log(`A felhasználó korának megerősítése: ${isOver18 ? '18 éven felüli' : '18 éven aluli'}`);
    }
  }, [isOver18]);

  const handleAgeConfirmation = (answer) => {
    setIsOver18(answer);
    setShowAgeModal(false);
    if (answer) {
      setShowSomeModal(true);
    } else {
      setShowSomeModal(false);
    }
  };

  const closeSomeModal = () => {
    setShowSomeModal(false);
  };

  return (
    <div className="navbar-brand">
      
      {isOver18 === false && (
        <p>Sajnáljuk, de csak 18 éves vagy annál idősebb látogatók vásárolhatnak az oldalunkon.</p>
      )}
      {isOver18 === true && (
        <SomeModal isOpen={showSomeModal} onClose={closeSomeModal} />
      )}
      {isOver18 === null && (
        <AgeConfirmationModal
          isOpen={showAgeModal}
          onConfirm={handleAgeConfirmation}
          onCancel={() => handleAgeConfirmation(false)}
        />
      )}
    </div>
  );
}

export default Homepage;
