import { AuthProvider } from '@contexts/authContext';
import { LateralMenuProvider } from '@contexts/lateralMenuContext';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index.routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LateralMenuProvider>
          <Routes />
        </LateralMenuProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
