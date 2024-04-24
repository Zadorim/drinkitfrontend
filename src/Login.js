import React, { useState } from 'react';
import axios from 'axios';



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5130/auth/login', {
        username,
        password
      });
      console.log('Bejelentkezés sikeres', response.data);
      // Itt kezelhetem tovább a bejelentkezett felhasználó adatait, pl. átirányítás
    } catch (error) {
      console.error('Bejelentkezési hiba', error.response);
      // Itt kezelhetem a hibákat, pl. hibás felhasználónév/jelszó
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
          type="password"
          id="password"         
          value={password}
          onChange={handlePasswordChange}
          required autoComplete="current-password"
        />
      </div>
      <button type="submit">Bejelentkezés</button>
    </form>
  );
}

export default Login;
