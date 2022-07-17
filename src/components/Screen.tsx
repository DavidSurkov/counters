import React from 'react';
import styled from "styled-components";

interface IScreen {
    display: number | string
    setRed: boolean
}

const ScreenStyle = styled.div<IScreen>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  text-align: center;
  background-color: #53A115FF;
  font-size: 70px;
  min-width: 200px;
  height: 200px;
  color: ${(props) => ((props.setRed) ? 'red' : 'white')};
`;

export const Screen = (props: IScreen) => {
    return (
        <ScreenStyle display={props.display} setRed={props.setRed}>
            {props.display}
        </ScreenStyle>
    );
};

