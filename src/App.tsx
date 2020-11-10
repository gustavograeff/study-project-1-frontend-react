import { AuthProvider } from '@contexts/authContext';
import { LateralMenuProvider } from '@contexts/lateralMenuContext';
import { UbuntuRegular } from '@fonts/Fonts';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Routes from './routes/index.routes';

const StyledDivMainContainer = styled.div`
  font-family: 'UbuntuRegular';
  max-width: 100%;
  overflow-x: hidden;
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LateralMenuProvider>
          <UbuntuRegular />
          <StyledDivMainContainer>
            <Routes />
          </StyledDivMainContainer>
        </LateralMenuProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
