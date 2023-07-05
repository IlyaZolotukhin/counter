import React, {useEffect, useState} from "react";

function LocalStorage() {
//LocalStorage находиться->посмотреть код-> application->Local Storage(там же Session Storage)
    const [value, setValue] = useState<number>(() => {
        const valueAsString = localStorage.getItem('counterValue');
        return valueAsString ? JSON.parse(valueAsString) : 0;
        });

    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    const incHandler = () => {//счетчик
        setValue(value + 1)
    }
   /* const setToLocalStorageHandler = () => {//для сохранения записей счетчиков
        localStorage.setItem('counterValue', JSON.stringify(value))//запись счетчика
        localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))//вторая запись счетчика
    }

    const setToSessionStorageHandler = () => {//для сохранения записей счетчиков до закрытия браузера
        sessionStorage.setItem('counterValue', JSON.stringify(value))//запись счетчика на сессию
    }
    const getFromLocalHandler = () => {//для показа первой записи счетчика после обновления
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }
    const clearLocalStorageHandler = () => {// для очистки всей памяти на 0
        localStorage.clear()
        setValue(0)
    }

    const removeItemLocalStorageHandler = () => {//для удаления любой записи счетчика
        localStorage.removeItem('counterValue + 1')
    }*/

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>счет</button>
            {/*<button onClick={setToLocalStorageHandler}>сохранить счет</button>
            <button onClick={setToSessionStorageHandler}>сохранить счет на сессию</button>
            <button onClick={getFromLocalHandler}>показать сохраненное</button>
            <button onClick={clearLocalStorageHandler}>очистить</button>
            <button onClick={removeItemLocalStorageHandler}>удалить счет из памяти</button>*/}
        </div>
    );
}

export default LocalStorage;