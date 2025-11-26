import React, { useEffect, useState } from 'react';

export default function Profile(){
  const [user, setUser] = useState(null);

  useEffect(()=>{
    try{
      const token = localStorage.getItem('access_token');
      // access token not a full profile — but we store username returned on login/register (optional)
      const raw = localStorage.getItem('user_profile');
      if (raw) setUser(JSON.parse(raw));
    }catch(e){/* ignore */}
  },[]);

  if (!user) return <div><h2>Profile</h2><p>No user information locally stored.</p></div>;

  return (
    <div>
      <h2>Profile — {user.username}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}
