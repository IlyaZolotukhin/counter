import React, { useEffect, useState } from 'react';
import { Button } from './Button';

function Counter() {
    const [count, setCount] = useState(0);
    const [maxValue, setMaxValue] = useState<number | null>(null);
    const [startValue, setStartValue] = useState<number | null>(null);

    useEffect(() => {
        const storedMaxValue = localStorage.getItem('maxValue');
        const storedStartValue = localStorage.getItem('startValue');
        if (storedMaxValue && storedStartValue) {
            setMaxValue(parseInt(storedMaxValue));
            setStartValue(parseInt(storedStartValue));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('maxValue', maxValue?.toString() ?? '');
        localStorage.setItem('startValue', startValue?.toString() ?? '');
    }, [maxValue, startValue]);

    const onClickCountButton = () => {
        if (count < (maxValue ?? 5)) {
            setCount(count + 1);
        }
    };

    const onClickResetButton = () => {
        setCount(startValue ?? 0);
    };

    const onChangeMaxValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        if (newValue <= (startValue ?? 0)) {
            event.target.classList.add('error');
            setMaxValue(null);
        } else {
            event.target.classList.remove('error');
            setMaxValue(newValue);
        }
    };

    const onChangeStartValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        if (newValue < 0 || newValue >= (maxValue ?? 5)) {
            event.target.classList.add('error');
            setStartValue(null);
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

    return (
        <div className="App">
            <div className="settings">
                <div>
                    <span>Max value: </span>
                    <input type="number" min="1" max="100" value={maxValue ?? ''} onChange={onChangeMaxValue} />
                </div>
                <div>
                    <span>Start value: </span>
                    <input type="number" min="0" max={(maxValue ?? 5) - 1} value={startValue ?? ''} onChange={onChangeStartValue} />
                </div>
                <Button name="Set" ButtonCallBack={onClickSetButton} maxValue={maxValue }startValue={startValue} count={count}/>
            </div>
            <div className="result">
                {/*<div style={{ color: count === (maxValue ?? 5) ? 'red' : 'black' }}>{countMessage}</div>*/}
                <div>{count}</div>
            </div>
            <div className="btn">
                <Button name="Count" ButtonCallBack={onClickCountButton} count={count} />
                <Button name="Reset" ButtonCallBack={onClickResetButton} count={count} />
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
