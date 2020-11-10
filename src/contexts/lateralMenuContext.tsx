import { ILateralMenuContext, ILateralMenuState } from '@interfaces/UserInterface';
import React, { createContext, useContext, useState } from 'react';

export const LateralMenuContext = createContext<ILateralMenuContext>(
  {} as ILateralMenuContext
);

export const LateralMenuProvider: React.FC = ({ children }) => {
  const [lateralMenu, setLateralMenu] = useState<ILateralMenuState | null>(null);

  const changeLateralMenuState = () => {
    const isLateralMenuOpen = !!lateralMenu?.isOpen;
    setLateralMenu({ isOpen: !isLateralMenuOpen });

    return isLateralMenuOpen;
  };

  return (
    <LateralMenuContext.Provider
      value={{ isOpen: !!lateralMenu?.isOpen, changeLateralMenuState }}
    >
      {children}
    </LateralMenuContext.Provider>
  );
};

export function useLateralMenu() {
  const context = useContext(LateralMenuContext);

  return context;
}
