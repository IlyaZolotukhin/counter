import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import s from './Counter.module.css'

function Counter() {
    const [count, setCount] = useState(0);
    const [maxValue, setMaxValue] = useState<number>(() => {
        const storedMaxValue = localStorage.getItem('maxValue');
        return storedMaxValue ? JSON.parse(storedMaxValue) : 0;
    });

    const [startValue, setStartValue] = useState<number>(() => {
        const storedStartValue = localStorage.getItem('startValue');
        return storedStartValue ? JSON.parse(storedStartValue) : 0;
    });

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(startValue));
    }, [maxValue, startValue]);

    const onClickCountButton = () => {
        if (count < maxValue) {
            setCount(count + 1);
        }
    };

    const onClickResetButton = () => {
        setCount(startValue ?? 0);//посмотреть задание
    };

    const onChangeMaxValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        if (newValue <= startValue) {
            event.target.classList.add('error');
            setMaxValue(newValue);
        } else {
            event.target.classList.remove('error');
            setMaxValue(newValue);
        }
    };

    const onChangeStartValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        if (newValue < 0 || newValue >= maxValue) {
            event.target.classList.add('error');
            setStartValue(newValue);
        } else {
            event.target.classList.remove('error');
            setStartValue(newValue);
        }
    };

    const onClickSetButton = () => {
        if (maxValue !== null && startValue !== null) {
            setCount(startValue);
        }
    };

    /*let countMessage = 'Enter values and press "Set"';
    if (maxValue !== null && startValue !== null) {
        if (startValue < 0 || startValue >= maxValue) {
            countMessage = <span className="error">Incorrect value!</span>;
        } else {
            countMessage = 'Count';
        }
    }*/

    const isSetButtonDisabled = startValue < 0 || maxValue <= startValue;
    const isCountButtonDisabled = count >= maxValue;
    const isResetButtonDisabled = count === 0;

    return (
        <div className="App">
            <div className={s.settings}>
                <div>
                    <span>Max value: </span>
                    <input type="number"  value={maxValue} onChange={onChangeMaxValue} />
                </div>
                <div>
                    <span>Start value: </span>
                    <input type="number" value={startValue} onChange={onChangeStartValue} />
                </div>
                <Button name="Set" disabled={isSetButtonDisabled}
                        ButtonCallBack={onClickSetButton} />
            </div>
            <div className={s.result}>
                {/*<div style={{ color: count === (maxValue ?? 5) ? 'red' : 'black' }}>{countMessage}</div>*/}
                <div>{count}</div>

            <div className="btn">
                <Button name="Count" disabled={isCountButtonDisabled}
                        ButtonCallBack={onClickCountButton} />
                <Button name="Reset" disabled={isResetButtonDisabled}
                        ButtonCallBack={onClickResetButton} />
            </div>
            </div>
        </div>
    );
}

export default Counter;


/*import React, {useEffect, useState} from 'react';
import {Button} from "./Button";

function Counter() {
    let [count, setCount] = useState(0);

    const onClickCountButton = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }

    const onClickResetButton = () => {
        setCount(0);
    }

    return (
        <div className="App">
            <div className="result">
                <div style={{color: count === 5 ? 'red' : 'black'}}>{count}</div>
            </div>
            <div className="btn">
                <Button name={'Count'} ButtonCallBack={onClickCountButton} count={count}/>
                <Button name={'Reset'} ButtonCallBack={onClickResetButton} count={count}/>
            </div>
        </div>
    )

}

export default Counter;
*/
