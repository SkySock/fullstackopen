import {useState, useEffect} from "react"
import countriesService from "./services/countries";
import CountriesList from "./components/CountriesList";
import SearchField from "./components/SearchField";
import Country from "./components/Country";


function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    countriesService.getAll()
      .then((countries) => {setCountries([...countries])})
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filteredCountries = countries.filter(country => country.name.official.toLowerCase().includes(search.toLowerCase()))

  const message = (<p>Too many matches, specify another filter</p>)

  

  return (
    <div>
      <SearchField value={search} onChange={handleSearch}/>
      {filteredCountries.length > 10 ? message : null}
      {(filteredCountries.length > 1 && filteredCountries.length <= 10) ? <CountriesList countries={filteredCountries} /> : null}
      {filteredCountries.length === 1 ? <Country country={filteredCountries[0]} /> : null}
    </div>
  );
}

export default App;
