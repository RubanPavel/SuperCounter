import {Button} from "@mui/material";
import React from "react";

type propsSuperButton ={
  disabled?:any
  onClick?:any
  logo:any
  variant?: any
  startIcon?:any
}

export const SuperButton = (props : propsSuperButton) => {
  return(
     <Button variant={props.variant} startIcon={props.startIcon}  disabled={props.disabled} onClick={props.onClick}>{props.logo}</Button>
  )

}