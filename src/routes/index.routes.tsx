import { useAuth } from '@contexts/authContext';
import React from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const App: React.FC = () => {
  const { signed } = useAuth();
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default App;
