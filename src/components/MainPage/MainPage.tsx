import { useAuth } from '@contexts/authContext';
import React from 'react';

const Main: React.FC = () => {
  const { signOut } = useAuth();

  const onClickSignOut = () => {
    signOut();
  };

  return (
    <div>
      <h1>Main</h1>
      <button type="button" onClick={onClickSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Main;
