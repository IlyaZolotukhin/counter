import React from 'react';

type ButtonPropsType = {
    name: string
    ButtonCallBack: () => void
    count: number
    maxValue?: number|null
    startValue?: number|null
}

export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.ButtonCallBack();
    }
    return (
        <button onClick={onClickButtonHandler} disabled=
            {(props.name === 'Set' && props.maxValue === null||props.startValue ===null ) ||
            (props.name === 'Count' && props.count >= (props.maxValue ?? 5)) ||
                (props.name === 'Reset' && props.count === (props.startValue ?? 0))}>
            {props.name}</button>
    );
};