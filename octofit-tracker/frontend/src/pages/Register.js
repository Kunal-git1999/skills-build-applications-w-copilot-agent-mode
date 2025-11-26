import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api';

export default function Register(){
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function submit(e){
    e.preventDefault();
    setError(null);
    const resp = await register({ username, email, password });
    if (!resp.ok) {
      setError('Register failed');
      return;
    }
    const data = await resp.json();
    localStorage.setItem('access_token', data.access);
    localStorage.setItem('refresh_token', data.refresh);
    if (data.user) localStorage.setItem('user_profile', JSON.stringify(data.user));
    navigate('/');
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <div><label>Username: <input value={username} onChange={e=>setUsername(e.target.value)} /></label></div>
        <div><label>Email: <input value={email} onChange={e=>setEmail(e.target.value)} /></label></div>
        <div><label>Password: <input type="password" value={password} onChange={e=>setPassword(e.target.value)} /></label></div>
        <div><button type="submit">Register</button></div>
      </form>
      {error && <div style={{color:'red'}}>{error}</div>}
    </div>
  );
}
