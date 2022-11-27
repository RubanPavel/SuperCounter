import {ChangeEvent} from "react";
import './InputStules.css';
import {TextField} from "@mui/material";

type SuperInputType = {
    id: string
    label: string
    variant: string
    counter?: number
    setCounter?: (e: ChangeEvent<HTMLInputElement>) => void
    error: 'Start value must be positive!!!' |"the maximum value must be greater than the starting value!!!" |"the maximum value must not be equal to the starting value"| ""

}


export const SuperInput = (props: SuperInputType) => {


    return (
        <div>
            <div className={'inputStyle'}>
                <TextField  className={(props.error !== "") ? 'inputError' : ''} type={"number"}
                           value={props.counter} onChange={props.setCounter}/>
            </div>


        </div>
    );

}