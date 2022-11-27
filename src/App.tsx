import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {ButtonSet} from "./Component/ButtonSet/ButtonSet";
import {Screen} from "./Component/Screen/Screen";
import {SuperButton} from "./Component/ButtonSet/Button/SuperButton";
import {SuperInput} from "./Component/InputSet/SuperInput/SuperInput";
import {restoreState, saveState} from "./Component/local";
import DeleteIcon from "@mui/icons-material/Delete";


export const App = () => {

    const [counter, setCounter] = useState<number>(0);

    const [error, setError] = useState<any>('');


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

    const [counterMax, setCounterMax] = useState<any>(0);
    const [counterMin, setCounterMin] = useState<any>(0);


    const save = () => {
        saveState<number>('valueMax', counterMax)
        saveState<number>('valueMin', counterMin)
    }
    const restore = () => {
        setCounterMax(restoreState<number>('valueMax', counterMax))
        setCounterMin(restoreState<number>('valueMin', counterMin))
    }

    const clear = () => {
        localStorage.clear()
        setCounterMax(0)
        setCounterMin(0)
    }

    const setNew = () => {
        setCounter(counterMin)
        save()
        reset()
        Check()


    }

    const restoreNew = () => {
        restore()
        reset()
    }

    const Check = () => {


        if (counterMin < 0) {
            setError('Start value must be positive!!!')
        } else if (counterMax <= counterMin) {
            setError('the maximum value must be greater than the starting value!!!')

        } else if (counterMin === counterMax) {
            setError('the maximum value must not be equal to the starting value')
        }else setError("")

        /*else if (counterMin > 0) {
            setError('+')
        } else if (counterMin < counterMax) {
            setError('+')
        } */
    }

    const MaxValueGetHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCounterMax(Number(e.currentTarget.value))
    }

    const MinValueGetHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCounterMin(Number(e.currentTarget.value))

    }

    return (
        <div className="App">
            <div className="counterBody">
                <div className="counterSet">
                    <div className="counterSet_inputs">
                        <SuperInput
                            id={"outlined-basic"}
                            label={"Outlined"}
                            variant={"outlined"}
                            error={error}
                            setCounter={MaxValueGetHandler}
                            counter={counterMax}
                        />
                        <SuperInput
                            id={"outlined-basic"}
                            label={"Outlined"}
                            variant={"outlined"}
                            error={error}
                            setCounter={MinValueGetHandler}
                            counter={counterMin}
                        />
                    </div>
                    <div className="counterSet_buttons">
                        <SuperButton variant="contained" onClick={setNew} logo={'save'}/>
                        <SuperButton variant="outlined" onClick={restoreNew} logo={'restore'}/>
                        <SuperButton variant="outlined" onClick={clear} startIcon={<DeleteIcon/>} logo={'clear'}/>
                    </div>
                </div>

                <div className="counter">

                    <Screen error={error} counter={counter}/>
                    <ButtonSet counter={counter} counterMax={counterMax} counterMin={counterMin} inc={inc} dec={dec}
                               reset={reset}/>
                </div>
            </div>
        </div>
    );
}







