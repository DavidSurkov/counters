import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from "styled-components";
import {Screen} from "../Screen";
import {Button} from "../Button";

//Styles
const ChangingCounterStyle = styled.div`
  display: flex;
`
const CountStyle = styled.div`
  text-align: center;
  width: 350px;
  margin: 5px;
  padding: 10px;
  border: 1px solid #53A115FF;
  border-radius: 20px;

  button {
    width: 100px;
  }
`
const SetStyle = styled.div`
  width: 350px;
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

export const ChangingCounter = () => {

    let [counter, setCounter] = useState(0);
    const [numberStart, setNumberStart] = useState(0);
    const [numberEnd, setNumberEnd] = useState(0);
    const [isSet, setIsSet] = useState(false);

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


    const addNumber = () => {
        if (counter < numberEnd) {
            setCounter(counter + 1);
        }
    };

    const resetNumber = () => setCounter(numberStart)
    const setNumbers = () => {
        setCounter(numberStart);
        localStorage.setItem('numberStartValue', JSON.stringify(numberStart))
        localStorage.setItem('numberEndValue', JSON.stringify(numberEnd))
        setIsSet(false)
    }
    const startToSetNumbers = () => {
        setIsSet(true)
    }

    const startValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNumberStart(+e.currentTarget.value)
    }
    const endValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNumberEnd(+e.currentTarget.value)
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
    const defineScreen = () => {
        if (isSet) {
            return (
                <SetStyle>
                    {'Set Max'}
                    <input type='number' value={numberEnd} onChange={endValueChange}/>
                    {'Set Min'}
                    <input type={'number'} value={numberStart} onChange={startValueChange}/>
                    <Button name={'Set'} callback={setNumbers} disabled={disableSet()}/>
                </SetStyle>
            )
        }
        return (
            <CountStyle>
                <Screen display={counter} setRed={setRedNumber()}/>
                <Button name={'Increase'} callback={addNumber} disabled={disableIncrease()}/>
                <Button name={'Reset'} callback={resetNumber} disabled={disableReset()}/>
                <Button name={'Set'} callback={startToSetNumbers} disabled={disableSet()}/>
            </CountStyle>
        );
    }
    return (
        <ChangingCounterStyle>
            {defineScreen()}
        </ChangingCounterStyle>

    );
};

