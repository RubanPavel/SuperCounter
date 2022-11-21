type SuperCounterType = {
    counter?: number

}

export const SuperScreen = (props: SuperCounterType) => {
    return (
        <div>
            <div>{props.counter}</div>

        </div>
    )
}