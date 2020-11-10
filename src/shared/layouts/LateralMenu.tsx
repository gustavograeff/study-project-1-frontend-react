import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  black,
  zIndexBiggest,
  zIndexSmallest,
  backgroundOpacity,
  lightBeige,
} from '@assets/css/Variables';
import { useLateralMenu } from '@contexts/lateralMenuContext';

interface StyledProps {
  isLateralMenuOpen: boolean;
}

const StyledBackGround = styled.div<StyledProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${black};
  z-index: ${zIndexSmallest};
  opacity: ${backgroundOpacity};
  display: ${(props) => (props.isLateralMenuOpen ? 'block' : 'none')};
  transition: 0.5s;
`;

const StyledLateralMenu = styled.div<StyledProps>`
  height: 100%;
  width: 70%;
  position: absolute;
  background-color: ${lightBeige};
  z-index: ${zIndexBiggest};
  left: ${(props) => (props.isLateralMenuOpen ? '0%' : '-70%')};
  transition: 0.5s;
`;

const LateralMenu: React.FC = (props) => {
  const { isOpen, changeLateralMenuState } = useLateralMenu();

  function toggleLateralMenuState() {
    changeLateralMenuState();
  }

  return (
    <div>
      <StyledBackGround onClick={toggleLateralMenuState} isLateralMenuOpen={isOpen} />
      <StyledLateralMenu isLateralMenuOpen={isOpen}>{props.children}</StyledLateralMenu>
    </div>
  );
};

export default LateralMenu;
