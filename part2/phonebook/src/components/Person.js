const Person = ({person, handleDelete}) => {
    return (
        <div>
            {person.name} {person.number} &nbsp;
            <button onClick={handleDelete(person.id, person.name)}>DELETE</button>
        </div>
    )
}

export default Person