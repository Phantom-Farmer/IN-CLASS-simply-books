import React from 'react';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function Profile() {
  const { user } = useAuth();
  console.warn(user);
  return (
    <div>
      <User
        image={user.photoURL}
        email={user.email}
        name={user.name}
        lastLogin={user.metadata.lastSignInTime}
      />
      <button type="button" onClick={signOut}>sign out</button>
    </div>
  );
}
