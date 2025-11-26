import React, { useEffect, useState } from 'react';
import { fetchActivities, createActivity } from '../api';

export default function Activities(){
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetchActivities().then(list=>{
      setActivities(list);
      setLoading(false);
    }).catch(()=>setLoading(false));
  },[]);

  async function addSample(){
    await createActivity({ activity_type: 'run', duration_minutes: 25 });
    // refresh
    const list = await fetchActivities();
    setActivities(list);
  }

  return (
    <div>
      <h2>Activities</h2>
      {loading ? <p>Loading…</p> : (
        <div>
          <button onClick={addSample}>Add sample activity</button>
          <ul>
            {activities.map(it=> (
              <li key={it.id}>{it.user.username}: {it.activity_type} — {it.duration_minutes}m</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
