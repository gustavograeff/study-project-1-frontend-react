import React, { useContext } from 'react';
import AuthContext from '@contexts/auth.context';

const Home: React.FC = () => {
  const { signed } = useContext(AuthContext);

  console.log(signed);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
