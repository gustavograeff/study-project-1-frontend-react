import React, { MouseEventHandler } from 'react';
import { StyledButton } from './StyledButton';

interface IButtonProps {
  clicked: MouseEventHandler;
  disabled?: boolean;
  backgroundColor?: string;
}

const button: React.FC<IButtonProps> = (props) => {
  return (
    <StyledButton
      onClick={props.clicked}
      disabled={props.disabled}
      backgroundColor={props.backgroundColor}
      type="button"
    >
      {props.children}
    </StyledButton>
  );
};

export default button;
