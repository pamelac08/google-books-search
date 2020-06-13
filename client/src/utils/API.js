import axios from "axios";

export default {
    getAllBooks: function() {
        return axios.get("/api/books");
    },
    getOneBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    saveBook: function(newBook) {
        return axios.post("/api/books", newBook);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
}
