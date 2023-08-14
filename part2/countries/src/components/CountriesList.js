const CountriesList = ({countries}) => {
    return (
        <>
            {countries.map((country) => {
                return <p key={country.name.official}>{country.name.official}</p>
            })}
        </>
    )
}

export default CountriesList