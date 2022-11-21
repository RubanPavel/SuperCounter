import React, {useState} from "react";
import {SuperButton} from "./Button/SuperButton";

type propsType = {
    inc: () => void
    dec: () => void
    reset: () => void
    counter:number
    counterMin?:number
    counterMax?:number
}


export const ButtonSet = (props: propsType) => {


    return (
        <div>
            <div>
                <SuperButton disabled={props.counter === props.counterMin} onClick={props.dec} logo={'-'}/>
                <SuperButton disabled={props.counter === props.counterMax} onClick={props.inc} logo={'+'}/>
            </div>
            <SuperButton disabled={props.counter === props.counterMin} onClick={props.reset} logo={'reset'}/>


        </div>

    )


}