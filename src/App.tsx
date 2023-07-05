import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import LocalStorage from "./LocalStorage/LocalStorage";
import Counter from "./Counter/Counter";

function App() {
    return (
        <div className="App">
            {/*<LocalStorage/>*/}
            <Counter/>
        </div>
    );
}

export default App;
