import React, { useContext } from 'react';
import AuthContext from '@contexts/authContext';

const Home: React.FC = () => {
  const { signed } = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
