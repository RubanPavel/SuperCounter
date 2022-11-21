import React, {useState} from 'react';
import './App.css';
import {ButtonSet} from "./Component/ButtonSet/ButtonSet";
import {Screen} from "./Component/Screen/Screen";
import {SuperButton} from "./Component/ButtonSet/Button/SuperButton";
import {SuperInput} from "./Component/InputSet/SuperInput/SuperInput";


export const App = () => {

    const [counter, setCounter] = useState(0);

    const [error, setError] = useState('');



    const step = 1; //step for counter
    const inc = () => {
        setCounter(counter + step)
    }
    const dec = () => {
        setCounter(counter - step)
    }
    const reset = () => {
        setCounter(counterMin)
    }


    const MaxValueGet = (value: string) => {
        setCounterMax(Number(value))
    }

    const MinValueGet = (value: string) => {
        setCounterMin(Number(value))
    }

    const setNew = () => {

        if (counterMin >= counterMax) {
            setError('ERRROOOR')
        } else {
            setCounter(counterMin)
            setError('')
        }

    }

    const [counterMax, setCounterMax] = useState(0);

    const [counterMin, setCounterMin] = useState(0);


    localStorage.setItem('MAXKey', '5')
    localStorage.setItem('MINKey', '0')

    let MaxValue = localStorage.getItem('MAXKey')
    let MinValue = localStorage.getItem('MINKey')

    return (
        <div className="App">
            <div>
                <div>
                    <div>
                        <SuperInput MaxValueGet={MaxValueGet} MinValueGet={MinValueGet}/>
                    </div>

                </div>
                <SuperButton onClick={setNew} logo={'SET'}/>
                <span className='error'>{error}</span>
            </div>
            <Screen counter={counter}/>
            <ButtonSet counter={counter} counterMax={counterMax} counterMin={counterMin} inc={inc} dec={dec}
                       reset={reset}/>

        </div>
    );
}







