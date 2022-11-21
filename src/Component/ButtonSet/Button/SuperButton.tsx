
type propsSuperButton ={
  disabled:any
  onClick:any
  logo:any
}

export const SuperButton = (props : propsSuperButton) => {
  return(
     <button disabled={props.disabled} onClick={props.onClick}>{props.logo}</button>
  )

}