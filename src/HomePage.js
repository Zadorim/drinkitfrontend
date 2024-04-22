import React, {useState,useEffect} from 'react';
import AgeConfirmationModal from './AgeConfirmationModal';
import SomeModal from './SomeModal';


const Homepage = (showModal) => {
  const [isOver18, setIsOver18] = useState(null);
  const [showAgeModal, setShowAgeModal] = useState(false);
  const [showSomeModal, setShowSomeModal] = useState(false);
  
  useEffect(() => {
    if (isOver18 !== null) {
      console.log(`A felhasználó korának megerősítése: ${isOver18 ? '18 éven felüli' : '18 éven aluli'}`);
    }
  }, [isOver18]); // Az useEffect csak akkor fut le, ha az isOver18 állapot megváltozik


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
      <button onClick={showModal}>Modál megjelenítése</button>     
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
          <button onClick={closeSomeModal} aria-label="Modal bezárása">
            <span aria-hidden="true">&times;</span>
          </button>
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

