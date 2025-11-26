import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';

export default function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function submit(e){
    e.preventDefault();
    setError(null);
    const resp = await login({ username, password });
    if (!resp.ok) {
      setError('Login failed');
      return;
    }
    const data = await resp.json();
    localStorage.setItem('access_token', data.access);
    localStorage.setItem('refresh_token', data.refresh);
    navigate('/');
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div><label>Username: <input value={username} onChange={e=>setUsername(e.target.value)} /></label></div>
        <div><label>Password: <input type="password" value={password} onChange={e=>setPassword(e.target.value)} /></label></div>
        <div><button type="submit">Login</button></div>
      </form>
      {error && <div style={{color:'red'}}>{error}</div>}
    </div>
  );
}
