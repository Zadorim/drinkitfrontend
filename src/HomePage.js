import React, {useState} from 'react';
import AgeConfirmationModal from './AgeConfirmationModal';



const HomePage = ({ showModal }) => {
  const [isOver18, setIsOver18] = useState(null);
  const [showAgeModal, setShowAgeModal] = useState(false);

  const handleAgeConfirmation = (answer) => {
    setIsOver18(answer);
    setShowAgeModal(false);
    if (answer) {
      showModal();
    }
  };

  return (
    <div className="navbar-band">
      <img src="img/DrinkIt.jpg" alt="DrinkIt" className='logo-icon' />
      <span> DrinkIt</span>
      <div>
        <button>Bejelentkezés</button>
        <button>Regisztráció</button>
      </div>
      {isOver18 === null && (
        <button onClick={() => setShowAgeModal(true)}>Elmúltam 18 éves</button>
      )}
      {isOver18 !== null && (
        <div>
          <h2>Vásárlási feltétel</h2>
          {isOver18 ? (
            <p>Üdvözöljük a DrinkIt webáruházban! Folytathatja a böngészést.</p>
          ) : (
            <p>Sajnáljuk, de csak 18 éves vagy annál idősebb látogatók vásárolhatnak az oldalunkon.</p>
          )}
        </div>
      )}
      <AgeConfirmationModal
        isOpen={showAgeModal}
        onConfirm={handleAgeConfirmation}
        onCancel={() => setShowAgeModal(false)}
      />
    </div>
  );
}

export default HomePage;

