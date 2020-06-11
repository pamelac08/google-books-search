import axios from "axios";

export default {
    getAllBooks: function() {
        return axios.get("http://localhost:3001/api/books");
    },
    getOneBook: function(id) {
        return axios.get("http://localhost:3001/api/books/" + id);
    },
    saveBook: function(newBook) {
        return axios.post("http://localhost:3001/api/books", newBook);
    },
    deleteBook: function(id) {
        return axios.delete("http://localhost:3001/api/books/" + id);
    }
}
