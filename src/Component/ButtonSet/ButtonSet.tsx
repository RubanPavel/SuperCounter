import React from "react";
import {SuperButton} from "./Button/SuperButton";

type propsType = {
    inc: () => void
    dec: () => void
    reset: () => void
    counter: number
}


export const ButtonSet = (props: propsType) => {

    const counterMax = 15;
    const counterMin = 0;

    return (
        <div>
            <div>
                <SuperButton disabled={props.counter === counterMin} onClick={props.dec} logo={'-'}/>
                <SuperButton disabled={props.counter === counterMax} onClick={props.inc} logo={'+'}/>
            </div>
            <SuperButton disabled={props.counter === 0} onClick={props.reset} logo={'reset'}/>


        </div>

    )


}