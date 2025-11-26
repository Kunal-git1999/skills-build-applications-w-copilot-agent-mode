const API_BASE = process.env.REACT_APP_API_BASE || '';

export async function fetchActivities(){
  const res = await fetch(`${API_BASE}/api/activities/`, { credentials: 'include' });
  if (!res.ok) throw new Error('Failed to fetch activities');
  return res.json();
}

export async function createActivity(payload){
  const res = await fetch(`${API_BASE}/api/activities/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(payload)
  });
  return res;
}

export default { fetchActivities, createActivity };
