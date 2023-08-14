const Country = ({country}) => {
    return (
        <>
            <h2>{country.name.official}</h2>
            <p>capital {country.capital["0"]}</p>
            <p>area {country.area}</p>
            <h3>Languages:</h3>
            <ul>
                {Object.values(country.languages).map((lang, id) => <li key={id}>{lang}</li>)}
            </ul>
            <img src={country.flags.png} alt="flag"></img>
        </>
    )
}

export default Country