const Total = ({parts}) => {
    const total = parts.reduce((sum, item) => sum += item.exercises, 0)
    return (
        <b>total of {total} exercises</b>
    )
}

export default Total