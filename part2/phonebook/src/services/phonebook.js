import axios from "axios"

const baseUrl = "http://localhost:3001/persons"


const phonebookService = {
    getAll: () => axios
        .get(baseUrl)
        .then((response) => response.data),
    
    create: newPerson => axios
        .post(baseUrl, newPerson)
        .then((response) => response.data),
    
    delete: id => axios
        .delete(`${baseUrl}/${id}`)
        .then((response) => response.data),
    update: (id, number) => axios
        .patch(`${baseUrl}/${id}/`, {number})
        .then((response) => response.data),
}

export default phonebookService