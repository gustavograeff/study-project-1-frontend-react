import React, { useContext } from 'react';
import AuthContext from '@contexts/authContext';

const Main: React.FC = () => {
  const { signOut } = useContext(AuthContext);

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
