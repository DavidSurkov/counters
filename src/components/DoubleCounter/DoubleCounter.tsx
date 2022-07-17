import React, {ChangeEvent, FocusEventHandler, useEffect, useRef, useState} from 'react';
import {Screen} from "../Screen";
import {Button} from "../Button";
import styled from "styled-components";
import {Input} from "../Input";
import {isBoolean} from "util";

const DoubleCounterStyle = styled.div`
  display: flex;
`
const CountStyle = styled.div`
  margin: 5px;
  padding: 10px;
  border: 1px solid #53A115FF;
  border-radius: 20px;
`
const SetStyle = styled.div`
  font-size: 20px;
  border-radius: 20px;
  margin: 5px;
  padding: 10px;
  background-color: #53A115FF;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    background-color: black;
    color: white;
    font-size: 20px;
    text-align: center;
    margin: 0 0 10px;
  }
`

export const DoubleCounter = () => {
    // const [counterStart, setCounterStart] = useState(0);
    // let [counterEnd, setCounterEnd] = useState(0);
    let [counter, setCounter] = useState(0);
    const [numberStart, setNumberStart] = useState(0);
    const [numberEnd, setNumberEnd] = useState(0);
    const [isTouched, setIsTouched] = useState(false);

    useEffect(() => {
        setIsTouched(true)
    }, [numberStart, numberEnd])
    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify(startValue))
    //     localStorage.setItem('numberStartValue', JSON.stringify(numberStart))
    //     localStorage.setItem('numberEndValue', JSON.stringify(numberEnd))
    // }, [startValue, numberStart, numberEnd])
    useEffect(() => {
        let numberStartAsString = localStorage.getItem('numberStartValue')
        if (numberStartAsString) {
            setNumberStart(JSON.parse(numberStartAsString))
            setCounter(JSON.parse(numberStartAsString))
        }
        let numberEndAsString = localStorage.getItem('numberEndValue')
        if (numberEndAsString) {
            setNumberEnd(JSON.parse(numberEndAsString))
        }
    }, [])
    // useEffect(() => {
    //     setCounter(numberStart)
    // }, [numberStart])


    const addNumber = () => {
        if (counter < numberEnd) {
            setCounter(counter + 1);
        }
    };

    const resetNumber = () => setCounter(numberStart)
    const setNumbers = () => {
        //setNumberStart(counterStart);
        setCounter(numberStart);
        // setNumberEnd(counterEnd);
        localStorage.setItem('numberStartValue', JSON.stringify(numberStart))
        localStorage.setItem('numberEndValue', JSON.stringify(numberEnd))
        setIsTouched(false)
    }

    const startValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNumberStart(+e.currentTarget.value)

        /*if (+e.currentTarget.value >= 0 && +e.currentTarget.value !== numberEnd) {
            setNumberStart(+e.currentTarget.value)
        } else alert('sorry')*/
    }
    const endValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNumberEnd(+e.currentTarget.value)

        /*if (+e.currentTarget.value >= 0 && +e.currentTarget.value !== numberStart) {
            setNumberEnd(+e.currentTarget.value)
        } else alert('sorry')*/
    }
    const disableIncrease = () => {
        return counter === numberEnd;

    }
    const disableReset = () => {
        return counter === numberStart;
    }
    const disableSet = () => {
        if (numberStart < 0) {
            return true
        }
        if (numberEnd < 0) {
            return true
        }
        return numberStart >= numberEnd;
    }
    const setRedNumber = () => {
        return counter === numberEnd;
    }
    const setRedText = () => {
        if (numberStart < 0) {
            return true
        }
        if (numberEnd < 0) {
            return true
        }
        return numberStart >= numberEnd;
    }
    const setText = () => {
        if (numberStart < 0) {
            return 'Wrong input'
        }
        if (numberEnd < 0) {
            return 'Wrong input'
        }
        if (numberStart >= numberEnd) {
            return 'Wrong input'
        } else return 'Set number'
    }
    const defineScreen = () => {
        if (isTouched) {
            return <Screen display={setText()} setRed={setRedText()}/>;
        }
        return <Screen display={counter} setRed={setRedNumber()}/>;
    }
    return (
        <DoubleCounterStyle>
            <CountStyle>
                {defineScreen()}
                <Button name={'Increase'} callback={addNumber} disabled={disableIncrease()}/>
                <Button name={'Reset'} callback={resetNumber} disabled={disableReset()}/>
            </CountStyle>
            <SetStyle>
                {'Set Max'}
                <input type='number' value={numberEnd} onChange={endValueChange}/>
                {'Set Min'}
                <input type={'number'} value={numberStart} onChange={startValueChange}/>
                <Button name={'Set'} callback={setNumbers} disabled={disableSet()}/>
            </SetStyle>
        </DoubleCounterStyle>

    );
};

