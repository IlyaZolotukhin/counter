import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from './Button';
import s from './Counter.module.css'
import {Input} from "./Input";

function Counter() {
    const [startValue, setStartValue] = useState<number>(() => {
        const storedStartValue = localStorage.getItem('startValue');
        return storedStartValue ? JSON.parse(storedStartValue) : 0;
    });
    const [count, setCount] = useState<number | string>(startValue);
    const [maxValue, setMaxValue] = useState<number>(() => {
        const storedMaxValue = localStorage.getItem('maxValue');
        return storedMaxValue ? JSON.parse(storedMaxValue) : 0;
    });
    const [isSetButtonDisabled, setIsSetButtonDisabled] = useState(true);
    const isCountButtonDisabled = count >= maxValue;
    const isResetButtonDisabled = startValue < 0 || maxValue <= startValue || !isSetButtonDisabled;

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(startValue));
    }, [maxValue, startValue]);

    const onClickCountButton = () => {
        if (count < maxValue) {
            setCount(+count + 1);
        }
    };
    const onClickResetButton = () => {
        setCount(startValue);
    };
    const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        setIsSetButtonDisabled(false)
        setCount('enter values and press "set"')
        const newValue = parseInt(event.currentTarget.value);
        if (newValue <= startValue) {
            setCount('incorrect value!')
            setMaxValue(newValue);
        } else {
            setMaxValue(newValue);
        }
    };
    const onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        setIsSetButtonDisabled(false)
        setCount('enter values and press "set"')
        const newValue = parseInt(event.currentTarget.value);
        if (newValue < 0 || newValue >= maxValue) {
            setCount('incorrect value!')
            setStartValue(newValue);
            setIsSetButtonDisabled(true)
        } else {
            setStartValue(newValue);
        }
    };
    const onClickSetButton = () => {
        setIsSetButtonDisabled(true)
        if (maxValue !== null && startValue !== null) {
            setCount(startValue);
        }
    };
    return (
        <div className="App">
            <div className={s.settings}>
                <div className={s.inputBlock}>
                    <div>
                        <Input value={maxValue} isError={maxValue <= startValue}
                               name={"Max value"} onChangeCallBack={onChangeMaxValue}/>
                    </div>
                    <div>
                        <Input value={startValue} isError={startValue < 0 || startValue >= maxValue}
                               name={"Start value"} onChangeCallBack={onChangeStartValue}/>
                    </div>
                </div>

                <Button name="Set"
                        disabled={isSetButtonDisabled||maxValue <= startValue}
                        ButtonCallBack={onClickSetButton}/>
            </div>
            <div className={s.result}>
                <div style={{color: count === maxValue||count ==="incorrect value!" ? 'red' : 'black'}}
                     className={s.count}>{count}</div>

                <div className={s.btn}>
                    <Button name="Count" disabled={isResetButtonDisabled}
                            ButtonCallBack={onClickCountButton}/>
                    <Button name="Reset" disabled={isResetButtonDisabled}
                            ButtonCallBack={onClickResetButton}/>
                </div>
            </div>
        </div>
    );
}

export default Counter;

