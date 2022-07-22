import React, {useEffect, useState, useCallback} from "react";
import moment from "moment";
import styled from "styled-components";

const Block = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

interface IProps {
  timer: moment.Moment
}

export const Timer = React.memo((props: IProps) => {
  //const [startDate, setStartDate] = useState<moment.Moment>(props.timer);
  const [diff, setDiff] = useState<string>('loading');
  const [difference, setDifference] = useState<number>()
  let [timer, setTimer] = useState<NodeJS.Timer>();
  const [isRunning, setIsRunning] = useState(false);

  const stopHandler = () => {
    //setDifference(moment().diff);
    setIsRunning(false);
    timer && clearInterval(timer);
    console.log(difference)
  }
  const startTimerHandler = useCallback(() => {
    setIsRunning(true);
    timer = setInterval(() => {
      let differ = moment().diff(props.timer);
      setDifference(differ)
      setDiff(moment.utc(differ).format("HH:mm:ss"));
    }, 1000)
    setTimer(timer);
  }, []);
  useEffect(() => {
    startTimerHandler()
  }, [startTimerHandler])

  const playHandler = useCallback(() => {
    setIsRunning(true);
    const actualDate = moment().diff(difference)
    console.log(difference)
    timer = setInterval(() => {
      let differ = moment().diff(actualDate)
      console.log(`differ: ${differ}, actualDate: ${+actualDate}, difference: ${difference}`)
      setDiff(moment.utc(differ).format("HH:mm:ss"));
    }, 1000)
    setTimer(timer);
  }, []);

  return (
    <Block>
      <Buttons>
        {!isRunning
          ? <button onClick={playHandler}>start</button>
          : <button onClick={stopHandler}>stop</button>}
      </Buttons>
      <p>{diff}</p>
    </Block>
  );
});
