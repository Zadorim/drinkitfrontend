import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail] =useState('');
  const [fullName, setFullName] = useState('');
  const [iranyitoszam, setIranyitoszam] =useState('');
  const [varos, setVaros] =useState('');
  const [utca, setUtca] =useState('');
  const [hazszam, setHazszam] =useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleIranyitoszamChange = (event) => {
    setIranyitoszam(event.target.value);
  };
  
  const handleVarosChange = (event) => {
    setVaros(event.target.value);
  };
  
  const handleUtcaChange = (event) => {
    setUtca(event.target.value);
  };
  
  const handleHazszamChange = (event) => {
    setHazszam(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();   
      try {
        const response = await axios.post('http://localhost:5130/api/Felhasznalok/FelhasznaloHozzaadas', {
          username,
          password,
          email,
          fullName,
          iranyitoszam,
          varos,
          utca,
          hazszam
        });
        console.log('Regisztráció sikeres', response.data);
        // Sikeres regisztráció kezelése, pl. átirányítás
      } catch (error) {
        console.error('Regisztrációs hiba', error.response);
        // Hiba kezelése
      }
    };  

  return (
    <form onSubmit={handleSubmit}>      
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
          type="text"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
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
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="iranyitoszam">Iranyítószám:</label>
        <input
          type="number"
          id="iranyitoszam"
          value={iranyitoszam}
          onChange={handleIranyitoszamChange}
          required
        />
      </div>
      <div>
        <label htmlFor="varos">Város:</label>
        <input
          type="text"
          id="varos"
          value={varos}
          onChange={handleVarosChange}
          required
        />
      </div>
      <div>
        <label htmlFor="utca">Utca:</label>
        <input
          type="text"
          id="utca"
          value={utca}
          onChange={handleUtcaChange}
          required
        />
      </div>
      <div>
        <label htmlFor="hazszam">Házszám:</label>
        <input
          type="number"
          id="hazszam"
          value={hazszam}
          onChange={handleHazszamChange}
          required
        />
      </div>
      <button type="submit">Regisztrál</button>
    </form>
  );
}

export default Register;
