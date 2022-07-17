import React, {useState} from 'react';
import {Screen} from "../Screen";
import {Button} from "../Button";


export const SimpleCounter = () => {
    const [counter, setCounter] = useState<number>(0);
    const addNumber = () => {
        if (counter < 10) {
            setCounter(counter + 1);
        }
    }
    const resetNumber = () => setCounter(0)
    const disableIncrease = () => {
        return counter === 10;
    }
    const disableReset = () => {
        return counter === 0;
    }
    const setRedNumber = () => {
        return counter === 10;
    }
    return (
        <>
            <Screen display={counter} setRed={setRedNumber()}/>
            <Button name={'Increase'} callback={addNumber} disabled={disableIncrease()}/>
            <Button name={'Reset'} callback={resetNumber} disabled={disableReset()}/>
        </>

    );
}

