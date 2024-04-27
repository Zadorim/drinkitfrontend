import React, { useState } from 'react';
import axios from 'axios';



function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('');

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
      if (response.data.token == '') {
        console.log("sikertelen bejelentkezés");
        return
      }
      console.log("sikeres bejelentkezés: " + response.data.token);
      // Itt kezelhetem tovább a bejelentkezett felhasználó adatait, pl. átirányítás
    } catch (error) {
      /*if (!error?.response) {
        setErrorMsg('Bejelentkezési hiba');
      } else if (error.response?.status === 400) {
        setErrorMsg('Helytelen elhasználónév vagy jelszó');
      } else if (error.response?. status === 401) {
        setErrorMsg('Nem engedélyezett');
      } else {
        setErrorMsg("Hibás bejelentkezés");
      }*/
      console.error('Bejelentkezési hiba', error.response);
      // Itt kezelhetem a hibákat, pl. hibás felhasználónév/jelszó

    }
  };
  /*const fetchData = async  () => {
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
  }; */

  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <h1>Bejelentkezés</h1>
        <label htmlFor="username">Felhasználónév:</label>
        <input
          type="text"
          className='form-control'
          id="username"
          value={username}
          autoComplete='off'
          onChange={handleUsernameChange}
          //onChange={(e) => setUsername(e.target.value)}
          required /><br />
      </div>
      <div className='form-group'>
        <label htmlFor="password">Jelszó:</label>
        <input
          type="password"
          className='form-control'
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required autoComplete="current-password"
        />
      </div>
      <button className='btn btn-secondary' type="submit">Bejelentkezés</button>
    </form>
  );
}

export default Login;
