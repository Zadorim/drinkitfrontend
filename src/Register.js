import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Regisztráció a következő adatokkal:', username, fullName, password);
    // Itt jöhet a regisztrációs logika, pl. API hívás
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Teljes név:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={handleFullNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="username">Felhasználónév:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Jelszó:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button type="submit">Regisztrál</button>
    </form>
  );
}

export default Register;
