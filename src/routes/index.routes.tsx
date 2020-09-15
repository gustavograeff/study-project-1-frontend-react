import React, { useContext } from 'react';
import AuthContext from '@contexts/authContext';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const App: React.FC = () => {
  const { signed } = useContext(AuthContext);
  console.log('signed index routes', signed);

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default App;
