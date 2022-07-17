import React, {useState} from "react";
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
  timer: Date
}
export const Timer = (props: IProps) => {
  const [startDate, setStartDate] = useState<moment.Moment>(moment(props.timer));
  const [diff, setDiff] = useState("00:00:00");
  let [timer, setTimer] = useState<NodeJS.Timer>();
  const [isRunning, setIsRunning] = useState(false);
  const stopHandler = () => {
    setIsRunning(false);
    // @ts-ignore
    clearInterval(+timer)
  }

  const startTimerHandler = () => {
    /*!timer && */
    //await setStartDate(moment(new Date()));
    setIsRunning(true);
    if (!timer && !isRunning) {
      timer = setInterval(() => {
        debugger
        let end = moment(new Date());
        let differ = end.diff(startDate);
        setDiff(moment.utc(differ).format("HH:mm:ss"));
      }, 1000)
      setTimer(timer);
    } else if (timer && !isRunning) {
      timer = setInterval(() => {
        let end = moment(new Date());
        let differ = end.diff(startDate);
        setDiff(moment.utc(differ).format("HH:mm:ss"));
      }, 1000)
      setTimer(timer);
    }

  };

  return (
    <Block>
      <Buttons>
        <button onClick={startTimerHandler}>start</button>
        <button onClick={stopHandler}>stop</button>
      </Buttons>
      <p>{diff}</p>
    </Block>
  );
};
