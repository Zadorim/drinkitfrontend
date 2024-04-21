import React, {useState} from 'react';
import AgeConfirmationModal from './AgeConfirmationModal';
import SomeModal from './SomeModal';

const Homepage = ({ showModal }) => {
  const [isOver18, setIsOver18] = useState(null);
  const [showAgeModal, setShowAgeModal] = useState(false);
  const [showSomeModal, setShowSomeModal] = useState(false);

  const handleAgeConfirmation = (answer) => {
    setIsOver18(answer);
    setShowAgeModal(false);
    if (answer) {
      setShowSomeModal(true);  // Mutassa a SomeModal-t ha 18 éven felüli
    } else {
      setShowSomeModal(false); // Ne mutassa ha 18 éven aluli
    }
  };

  const closeSomeModal = () => {
    setShowSomeModal(false);
  };

  return (
    <div className="navbar-brand">
      <img src="img/DrinkIt.jpg" alt="DrinkIt" className='logo-icon' />      
      {isOver18 === null && (
        <button onClick={() => setShowAgeModal(true)}>Elmúltál 18 éves?</button>
      )}
      {isOver18 !== null && (
        <div>
          <h2>Vásárlási feltétel</h2>
          {isOver18 ? (
            <SomeModal isOpen={showSomeModal} onClose={closeSomeModal} />
          ) : (
            <p>Sajnáljuk, de csak 18 éves vagy annál idősebb látogatók vásárolhatnak az oldalunkon.</p>
          )}
        </div>
      )}
      <AgeConfirmationModal
        isOpen={showAgeModal}
        onConfirm={handleAgeConfirmation}
        onCancel={handleAgeConfirmation}
      />
    </div>
  );
}

export default Homepage;

