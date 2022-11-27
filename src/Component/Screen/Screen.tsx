
import {TextField} from "@mui/material";

type propsScreen = {
    counter?:any
    error?:any
}
export const Screen = (props: propsScreen) => {


    /*placeholder={props.error? props.error : props.counter + props.error}*/
    return (
        <TextField multiline maxRows={3}  id={"outlined-basic"}    variant={"outlined"} value={props.error? props.error : props.counter}      />
    )
}