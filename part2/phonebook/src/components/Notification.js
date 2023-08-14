
const Notification = ({ message, type }) => {
    if (message === null) {
        return null
    }
    if (type === null) {
        type = "error"
    }

    return (
        <div className={type}>
            {message}
        </div>
    )
}

export default Notification