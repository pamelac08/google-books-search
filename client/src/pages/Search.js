import React, { Component } from "react";
import SaveButton from "../components/SaveButton";
import ViewBtn from "../components/ViewButton";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

import "./style.css";

class Search extends Component {
  state = {
    books: [],
    title: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("input: ", this.state.title);

    let url = this.state.title;

    fetch("https://www.googleapis.com/books/v1/volumes?q=" + url)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          books: result.items,
          title: "",
        });
      });
  };

  componentDidUpdate() {
    console.log("books:", this.state.books);
  }

  saveBook = (book) => {
    let saveBook = {};

    if (book.volumeInfo.imageLinks) {
      saveBook = {
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        authors: book.volumeInfo.authors,
        image: book.volumeInfo.imageLinks.smallThumbnail,
        link: book.volumeInfo.infoLink,
      };
    } else {
      saveBook = {
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        authors: book.volumeInfo.authors,
        image: "",
        link: book.volumeInfo.infoLink,
      };
    }

    console.log("saveBook: ", saveBook);

    API.saveBook(saveBook)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div id="search-container">
        <div id="form">
          <form>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Search for Books"
            />
            <FormBtn
              // disabled={!(this.state.author && this.state.title)}
              onClick={this.handleFormSubmit}
            >
              Submit
            </FormBtn>
          </form>
        </div>

        {this.state.books.length ? (
          <List>
            <div className="card">
              <div className="card-header">Results</div>
              <div className="card-body">
                {this.state.books.map((book) => (
                  <ListItem key={book.id}>
                    <div className="title-div">
                      <p className="title">
                        <strong>{book.volumeInfo.title}</strong>
                      </p>
                      <p className="author">
                        Written by:&nbsp;
                        {book.volumeInfo.authors.map((author, index) => {
                          if (index === book.volumeInfo.authors.length - 1) {
                            return <span>{author}</span>;
                          } else {
                            return <span>{author},&nbsp;</span>;
                          }
                        })}
                      </p>
                    </div>

                    <div className="card mb-3 image-description-div">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          {book.volumeInfo.imageLinks ? (
                            <img
                              src={book.volumeInfo.imageLinks.smallThumbnail}
                              className="card-img"
                              alt="..."
                            />
                          ) : (
                            <img
                              src="https://via.placeholder.com/150"
                              className="card-img"
                              alt="..."
                            />
                          )}
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <p className="card-text">
                              {book.volumeInfo.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="buttons">
                      <ViewBtn href={book.volumeInfo.infoLink} />
                      <SaveButton onClick={() => this.saveBook(book)} />
                    </div>
                  </ListItem>
                ))}
              </div>
            </div>
          </List>
        ) : (
          <h3 id="no-results">No Results to Display</h3>
        )}
      </div>
    );
  }
}

export default Search;
