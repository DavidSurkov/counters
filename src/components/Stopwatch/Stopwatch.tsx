import React, {useState} from 'react';
import {Timer} from "./Timer";
import styled from "styled-components";

const Block = styled.div`
  background-color: #53A115FF;
  width: 300px;
  height: 300px;
  color: white;
  border-radius: 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Stopwatch = () => {

  const [array, setArray] = useState<Date[]>([new Date()]);
  const addTimerHandler = () => {
    const date = new Date()
    setArray((prevState) => [date, ...prevState])
  }

  return (
    <Container>
      <div>
        <input/>
        <button onClick={addTimerHandler}>Add</button>
      </div>
      <Block>
        {array?.map((t)=> <Timer key={Math.random()} timer={t}/>)}

      </Block>
    </Container>
  );
};

