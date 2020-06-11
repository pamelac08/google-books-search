import React, { Component } from "react";
import DeleteBtn from "../components/DeleteButton";
import ViewBtn from "../components/ViewButton";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
// import SaveButton from "../components/SaveButton";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadSavedBooks();
  }

  loadSavedBooks = () => {
    API.getAllBooks()
      .then((res) =>
        this.setState({
          books: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  deleteBook = (id) => {
    API.deleteBook(id)
      .then((res) => this.loadSavedBooks())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.books.length ? (
          <List>
            <div className="card">
              <div className="card-header">Saved Books</div>
              <div className="card-body">
                {this.state.books.map((book) => (
                  <ListItem key={book._id}>
                      <div className="title-div">
                        <p><strong>{book.title} </strong></p>
                        <p>Written by: {book.authors}</p>
                      </div>
                    
                    <div className="card mb-3 image-description-div">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img src={book.image} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <p className="card-text">{book.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="buttons">
                        <ViewBtn href={book.link} ></ViewBtn>
                        <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                      </div>
                  </ListItem>
                ))}
              </div>
            </div>
          </List>
        ) : (
          <h3>No Saved Books to Display</h3>
        )}
      </div>
    );
  }
}

export default Saved;
