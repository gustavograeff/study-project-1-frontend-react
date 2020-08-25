import React, { MouseEventHandler } from 'react';
import { StyledButton } from './StyledButton';

interface IButtonProps {
  clicked: MouseEventHandler;
  label: string;
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
      {props.label}
    </StyledButton>
  );
};

export default button;
