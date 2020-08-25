import styled from 'styled-components';

type ButtonStyleProps = {
  backgroundColor?: string;
};

export const StyledButton = styled.button<ButtonStyleProps>`
  color: white;
  border-radius: 15px;
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : '#ecd08b'};
  padding: 5px 20px;
  font-size: 12pt;
  font-weight: bold;
  border: none;
  line-height: 21px;
  &:disabled {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
