import React, {useState} from 'react';
import './App.css';
import {ButtonSet} from "./Component/ButtonSet/ButtonSet";
import {Screen} from "./Component/Screen/Screen";


export const App = () => {

    const [counter, setCounter] = useState(0);

    const step = 1; //step for counter

    const inc = () => {
        setCounter(counter + step)
    }

    const dec = () => {
        setCounter(counter - step)
    }

    const reset = () => {
        setCounter(0)
    }


    return (
        <div className="App">
            <Screen counter={counter}/>
            <ButtonSet counter={counter} inc={inc} dec={dec} reset={reset}/>

        </div>
    );
}







