import React, {useState} from "react";
import {SuperButton} from "./Button/SuperButton";
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import './ButtonStyle.css';

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
        <div className={'buttonSet'}>
            <div className={'button_top'}>
                <SuperButton variant="contained" disabled={props.counter === props.counterMin} onClick={props.dec} logo={'-'}/>
                <SuperButton variant="contained" disabled={props.counter === props.counterMax} onClick={props.inc} logo={'+'}/>
            </div  >
            <div className={'button_down'}>
                <SuperButton variant="outlined" startIcon={<DeleteOutlined/>} disabled={props.counter === props.counterMin} onClick={props.reset} logo={'reset'}/>
            </div>



        </div>

    )


}