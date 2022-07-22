import React, {useState} from 'react';
import {Timer} from "./Timer";
import styled from "styled-components";
import moment from "moment";

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

  const [array, setArray] = useState<moment.Moment[]>([]);
  const addTimerHandler = () => {
    const date = moment()
    setArray((prevState) => [date, ...prevState])
  }

  return (
    <Container>
      <div>
        <input/>
        <button onClick={addTimerHandler}>Add</button>
      </div>
      <Block>
        {array?.map((t)=> <Timer key={t.milliseconds()} timer={t}/>)}
      </Block>
    </Container>
  );
};

