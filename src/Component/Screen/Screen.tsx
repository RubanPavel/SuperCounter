type propsScreen = {
    counter: number
}
export const Screen = (props: propsScreen) => {
    return (
        <div>{props.counter}</div>
    )
}