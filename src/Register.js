import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail] =useState('');
  const [teljesNev, setTeljesNev] = useState('');
  const [iranyitoszam, setIranyitoszam] =useState('');
  const [varos, setVaros] =useState('');
  const [utca, setUtca] =useState('');
  const [hazszam, setHazszam] =useState('');

  

  const handleSubmit = async (event) => {
    event.preventDefault();   
      try {
        const response = await axios.post('http://localhost:5130/auth/register', {
          userName,
          password,
          email,
          teljesNev,
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
    <form onSubmit={handleSubmit} className="p-28" style={{backgroundColor: '#8ba5be', borderRadius: '10px'}}>
    <div className="mb-1 ">
      <h1 className="text-left mb-3">Regisztrálás</h1>
      <label htmlFor="username" className="col-m-6 form-label">Felhasználónév:</label>
      <input type="text" className="form-group" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} required />
    </div >
    <div className="mb-1">
      <label htmlFor="password" className="col-m-6 form-label">Jelszó:</label>
      <input type="password" className="form-group" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    </div>
    <div className="mb-1">
      <label htmlFor="email" className="col-m-6 form-label">Email:</label>
      <input type="email" className="form-group" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    </div>
    <div className="mb-1">
      <label htmlFor="teljesNev" className="col-m-6 form-label">Teljes név:</label>
      <input type="text" className="form-group" id="teljesNev" value={teljesNev} onChange={(e) => setTeljesNev(e.target.value)} required />
    </div>
    <div className="mb-1">
      <label htmlFor="iranyitoszam" className="col-m-6 form-label">Irányítószám:</label>
      <input type="text" className="form-group" id="iranyitoszam" value={iranyitoszam} onChange={(e) => setIranyitoszam(e.target.value)} required />
    </div>
    <div className="mb-1">
      <label htmlFor="varos" className="col-m-6 form-label">Város:</label>
      <input type="text" className="form-group" id="varos" value={varos} onChange={(e) => setVaros(e.target.value)} required />
    </div>
    <div className="mb-1">
      <label htmlFor="utca" className="col-m-6 form-label">Utca:</label>
      <input type="text" className="form-group" id="utca" value={utca} onChange={(e) => setUtca(e.target.value)} required />
    </div>
    <div className="mb-1">
      <label htmlFor="hazszam" className="col-m-6 form-label">Házszám:</label>
      <input type="number" className="form-group" id="hazszam" value={hazszam} onChange={(e) => setHazszam(e.target.value)} required />
    </div>      
      <button type="submit">Regisztrál</button>
    </form>
  );
}

export default Register;
