import { useAuth } from '@contexts/authContext';
import React from 'react';

const Home: React.FC = () => {
  const { signed } = useAuth();

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
