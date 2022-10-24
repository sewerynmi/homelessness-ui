import React from 'react';
import styled, { css } from 'styled-components';

const MyButton = styled.button`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border-style: none;
  font-weight: 700;
  padding: 11px 15px 12px;
  background-color: rgb(200, 0, 26);
  box-shadow: none;
  color: rgb(255, 255, 255);
  min-width: 48px;
  min-height: 48px;
  font-size: 1.8rem;
  cursor: pointer;

  &:focus {
    outline: 0px;
    box-shadow: rgb(255 255 255) 0px 0px 0px 2px, rgb(38 38 38) 0px 0px 0px 4px;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
    `}
`;

const Button = ({ text, oncClick }) => {
  const myOnClickAction = () => {
    console.log('This is action from the Styled Comp. - Button');
  };

  return (
    <React.Fragment>
      <MyButton onClick={myOnClickAction}>{text}</MyButton>
    </React.Fragment>
  );
};

export default Button;
