import { useState, useEffect} from 'react'
import PhonebookList from './components/Phonebook'
import FilterField from './components/FilterField'
import PersonForm from './components/PersonForm'
import phonebookService from './services/phonebook'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchField, setSearchField] = useState('')
  const [notification, setNotification] = useState([null, null])

  useEffect(() => {
    phonebookService.getAll().then((persons) => setPersons(persons))
  }, [])


  const handleInputChange = (setFn) => (event) => {
    setFn(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    let existPerson = persons.find(p => p.name === newName)
    if (existPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        phonebookService
          .update(existPerson.id, newNumber)
          .then((person) => {
            setPersons(persons.map(p => (p.id === person.id) ? person : p))
          })
          .catch((error) => console.log("Update error"))
      }
      setNewName("")
      setNewNumber("")
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    }
  

    phonebookService
      .create(newPerson)
      .then(person => {
        
        setPersons(persons.concat(person))
        setNotification([`Added ${person.name}`, "success"])
        setTimeout(() => setNotification([null, null]), 5000)
        setNewName("")
        setNewNumber("")
      })
      .catch((error) => {console.log(error);})
    
  }

  const handleDelete = (id, name) => (event) => {
    if (window.confirm(`Delete ${name}?`)) {    
      phonebookService
        .delete(id)
        .then(data => setPersons(persons.filter(person => person.id !== id)))
        .catch((error) => {
          setPersons(persons.filter(person => person.id !== id))
          setNotification([`Information of ${name} has already been removed from server`, "error"])
          setTimeout(() => setNotification([null, null]), 5000)
        })
    }
  }

  const filteringPersons = (searchField === "") ? persons : persons.filter((person) => person.name.toLocaleLowerCase().includes(searchField))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification[0]} type={notification[1]}/>
      <FilterField value={searchField} onChange={handleInputChange(setSearchField)} />
      <h2>add a new</h2>
      <PersonForm name={newName} number={newNumber} handleNameChange={handleInputChange(setNewName)} handleAddPerson={addPerson} handleNumberChange={handleInputChange(setNewNumber)}/>
      <h2>Numbers</h2>
      <PhonebookList persons={filteringPersons} handleDelete={handleDelete} />
    </div>
  )
}

export default App