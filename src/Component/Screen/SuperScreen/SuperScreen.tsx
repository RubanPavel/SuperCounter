type SuperCounterType = {
    counter?: number
}

export const SuperScreen = (props: SuperCounterType) => {
    return (
        <div>{props.counter}</div>
    )
}