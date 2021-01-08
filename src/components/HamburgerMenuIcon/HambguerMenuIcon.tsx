import React from 'react';
import styled from 'styled-components';
import { useLateralMenu } from '@contexts/lateralMenuContext';

interface StyledProps {
  isLateralMenuOpen: boolean;
}

const StyledHamburgerMenuIconContainer = styled.div<StyledProps>`
  width: 40px;
  height: 4px;
  transform: ${(props) =>
    props.isLateralMenuOpen ? 'translate3d(0,-10px,0) rotate(-45deg)' : 'rotate(0deg)'};
  position: absolute;
  top: 60px;
  background-color: black;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  right: 0;

  ::before {
    display: block;
    position: absolute;
    transform: ${(props) => (props.isLateralMenuOpen ? 'rotate(-90deg)' : 'rotate(0deg)')};
    top: ${(props) => (props.isLateralMenuOpen ? '0px' : '-10px')};
    transition: top 0.13s cubic-bezier(0.33333, 0, 0.66667, 0.33333) 0.16s,
      transform 0.13s cubic-bezier(0.215, 0.61, 0.355, 1) 0.25s;
    transition: top 0.13s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s,
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    background-color: black;
    content: '';
    height: 4px;
    width: 40px;
  }

  ::after {
    position: absolute;
    top: ${(props) => (props.isLateralMenuOpen ? '0px' : '-20px')};
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s linear 0.22s;
    transition: ${(props) =>
      props.isLateralMenuOpen
        ? ''
        : 'top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s, opacity 0.1s linear'};
    background-color: black;
    content: '';
    height: 4px;
    width: 40px;
  }
`;

const HamburgerMenuIcon: React.FC = (props) => {
  const { isOpen, changeLateralMenuState } = useLateralMenu();

  function toggleLateralMenuState() {
    changeLateralMenuState();
  }

  return (
    <StyledHamburgerMenuIconContainer isLateralMenuOpen={isOpen} onClick={toggleLateralMenuState} />
  );
};

export default HamburgerMenuIcon;
