import {SuperScreen} from "./SuperScreen/SuperScreen";

type propsScreen = {
    counter?: number
}
export const Screen = (props: propsScreen) => {
    return (
        <SuperScreen counter={props.counter}/>


    )
}