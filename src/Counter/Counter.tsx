import React, {useEffect, useState} from 'react';
import {Button} from './Button';
import s from './Counter.module.css'

function Counter() {
    const [count, setCount] = useState<number | string>(0);
    const [maxValue, setMaxValue] = useState<number>(() => {
        const storedMaxValue = localStorage.getItem('maxValue');
        return storedMaxValue ? JSON.parse(storedMaxValue) : 0;
    });

    const [startValue, setStartValue] = useState<number>(() => {
        const storedStartValue = localStorage.getItem('startValue');
        return storedStartValue ? JSON.parse(storedStartValue) : 0;
    });
    const [isSetButtonDisabled, setIsSetButtonDisabled] = useState(true);
    const isCountButtonDisabled = count >= maxValue;
    const isResetButtonDisabled = count === 0;

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
        setCount(startValue ?? 0);
    };

    const onChangeMaxValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsSetButtonDisabled(false)
        setCount('enter values and press "set"')
        const newValue = parseInt(event.target.value);
        if (newValue <= startValue) {
            setCount('incorrect value!')
            setMaxValue(newValue);
        } else {
            setMaxValue(newValue);
        }
    };

    const onChangeStartValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsSetButtonDisabled(false)
        setCount('enter values and press "set"')
        const newValue = parseInt(event.target.value);
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
                        <span>Max value: </span>
                        <input className={maxValue <= startValue ? s.error : ""}
                               type="number" value={maxValue} onChange={onChangeMaxValue}/>
                    </div>
                    <div>
                        <span>Start value: </span>
                        <input className={startValue < 0 || startValue >= maxValue ? s.error : ""}
                               type="number" value={startValue} onChange={onChangeStartValue}/>
                    </div>
                </div>

                <Button name="Set"
                        disabled={isSetButtonDisabled||maxValue <= startValue}
                        ButtonCallBack={onClickSetButton}/>
            </div>
            <div className={s.result}>
                <div style={{color: count === maxValue||count ==="incorrect value!" ? 'red' : 'black'}} className={s.count}>{count}</div>

                <div className={s.btn}>
                    <Button name="Count" disabled={isCountButtonDisabled}
                            ButtonCallBack={onClickCountButton}/>
                    <Button name="Reset" disabled={isResetButtonDisabled}
                            ButtonCallBack={onClickResetButton}/>
                </div>
            </div>
        </div>
    );
}

export default Counter;

