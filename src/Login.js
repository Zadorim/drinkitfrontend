import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    setUsername('');
    setPassword('');
    try {
      const response = await axios.post('http://localhost:5130/auth/login', {
        userName: username,
        password: password
      });
      setToken(response.data.token)
      if (response.data.token === '') {
        console.log("sikertelen bejelentkezés");
        return
      }
      console.log("sikeres bejelentkezés: " + response.data.token);
      navigate('/TermekekPage');
      // Itt kezelhetem tovább a bejelentkezett felhasználó adatait, pl. átirányítás
    } catch (error) {
      let errorMsg ='Bejelentkezési hiba';
      if (error.response) {
        switch (error.status){
          case 400:
            errorMsg = 'Helytelen felhasználónév vagy jelszó';
            break;
          case 401: 
            errorMsg = 'Nem engedélyezett';
            break;
          default:
            errorMsg= 'Hibás bejelentkezés';
            break;
          }
      }
      console.error(errorMsg, error.response);
      // Itt kezelhetem a hibákat, pl. hibás felhasználónév/jelszó

    }
  };
  const fetchData = async  () => {
    try {
      const response = await axios.get('http://localhost:5130/auth/login', {
        headers: {
          Authorization:`Bearer ${token}`
        }
    });
      setData(response.data);
    } catch (error) {
      console.error("Adatok lekérése sikertelen!", error);
    }
  }; 

  return (
    <form onSubmit={handleSubmit}>
      <div className='cform-floating mb-3'>
        <h1>Bejelentkezés</h1>
        <label htmlFor="usernameInput" className='form-label'>Felhasználónév:</label>
        <input
          type="text"
          className='form-control'
          id='usernameInput'
          placeholder='felhasználó név'        
          value={username}
          autoComplete='off'
          onChange={handleUsernameChange}
          //onChange={(e) => setUsername(e.target.value)}
          required /><br />
      </div>
      <div className='form-group mb-3'>
        <label htmlFor="passwordInput"className='form-label'>Jelszó:</label>
        <input
          type="password"
          className='form-control'
          id="passwordInput"
          placeholder='jelszó'          
          value={password}
          onChange={handlePasswordChange}
          required autoComplete="current-password"                      
        />
        <div className='form-check mb-3'>        
        <input 
        type="checkbox"
        className='form-check-input'
        id='check1' 
        />       
        <label className='form-check-label' htmlFor='cehck1'>Rendben?</label>     
        </div>
        </div>
      <button className='btn btn-secondary' type="submit">Bejelentkezés</button>
    </form>
  );
}

export default Login;
