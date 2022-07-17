import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import styled from "styled-components";

type DefaultType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type IInput = DefaultType & {
    onChangeNumber?: (value: number) => void;
}

const InputStyle = styled.input`

`

export const Input: React.FC<IInput> = ({
                                            type,
                                            value,
                                            onChange,
                                            onChangeNumber,
                                        }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeNumber && onChangeNumber(JSON.parse(e.currentTarget.value));
    };
    /*const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
      onBlur && onBlur(e);
      onBlurCall && onBlurCall(e)
    }*/

    return (
        <InputStyle type={type} value={value} onChange={onChangeCallback}/>
    );
};

