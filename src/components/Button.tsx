import React from 'react';
import styled from "styled-components";

const ButtonStyle = styled.button`
  font-size: 20px;
  color: white;
  height: 50px;
  width: 200px;
  background-color: #53A115FF;
  border-radius: 10px;
  margin: 5px 5px 0;

  &:disabled {
    background-color: #000000;
    color: #53A115FF;
  }
`

interface IButton {
    name: string,
    callback: () => void,
    disabled: boolean,
}


export const Button = (props: IButton) => {
    return (
        <ButtonStyle disabled={props.disabled} onClick={props.callback}>{props.name}</ButtonStyle>
    );
};

