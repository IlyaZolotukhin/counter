import React from 'react';

type ButtonPropsType = {
    name: string
    ButtonCallBack: () => void
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.ButtonCallBack();
    }
    return (
        <button onClick={onClickButtonHandler} disabled={props.disabled}>
            {props.name}
        </button>
    );
};

/*
const isSetButtonDisabled =
    props.startValue < 0 || props.maxValue <= props.startValue;
const isCountButtonDisabled = props.count >= props.maxValue;
const isResetButtonDisabled = props.count === 0;

return (
    <div className="App">
        <div className={s.settings}>
            <div>
                <span>Max value: </span>
                <input
                    type="number"
                    value={maxValue}
                    onChange={onChangeMaxValue}
                    disabled={isCountButtonDisabled}
                />
            </div>
            <div>
                <span>Start value: </span>
                <input
                    type="number"
                    value={startValue}
                    onChange={onChangeStartValue}
                    disabled={isCountButtonDisabled}
                />
            </div>
            <Button
                name="Set"
                ButtonCallBack={onClickSetButton}
                disabled={isSetButtonDisabled || isCountButtonDisabled}
            />
        </div>
        <div className={s.result}>
            <div>{count}</div>

            <div className="btn">
                <Button
                    name="Count"
                    ButtonCallBack={onClickCountButton}
                    disabled={isCountButtonDisabled || isSetButtonDisabled}
                />
                <Button
                    name="Reset"
                    ButtonCallBack={onClickResetButton}
                    disabled={isResetButtonDisabled || isSetButtonDisabled}
                />
            </div>
        </div>
    </div>
);*/
