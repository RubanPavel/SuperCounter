import {Simulate} from "react-dom/test-utils";
import {ChangeEvent} from "react";

type SuperInputType = {
    MinValue?: any
    MaxValue?: any
    MaxValueGet:(value: string)=>void
    MinValueGet:(value: string)=>void
}

{/*value={props.MaxValue}*/}
{/*value={props.MinValue}*/}
export const SuperInput = (props: SuperInputType) => {



    const MaxValueGetCallBack = (e: ChangeEvent<HTMLInputElement>) => {
        props.MaxValueGet(e.currentTarget.value)
    }

    const MinValueGetCallBack = (e: ChangeEvent<HTMLInputElement>) => {
        props.MinValueGet(e.currentTarget.value)
    }

    return (
        <div>
            <div><input type="number"  onChange={MaxValueGetCallBack}/></div>

            <input type="number" onChange={MinValueGetCallBack}/>
        </div>
    )

}