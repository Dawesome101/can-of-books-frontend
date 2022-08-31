import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import bookMockup from './img/book-mockup.jpg';
import Button from 'react-bootstrap/Button';


class BestBooks extends React.Component {

	handleDelete = async(bookToDelete) => {
		try {
			const response = await axios.delete(`${process.env.REACT_APP_SERVER}/books/${bookToDelete._id}`)
			console.log(response.status);
			const filteredBooks = this.props.books.filter(book => {
				return book._id !== bookToDelete._id;
			})
			this.props.removeDeletedBook(filteredBooks);
		} catch(error){
		console.log(error)
		}
	}

  render() {
    let books = this.props.books.map(book => (
      <Carousel.Item className="carousel-item" key={book._id}>
        <img
          className={book._id}
          src={bookMockup}
          alt={book.name}
        />
        <Carousel.Caption>
          <h3>{book.name}</h3>
          <p>{book.description}</p>
          <p>{book.status}</p>
				<Button 
				variant="secondary" 
				onClick={() => this.handleDelete(book)} >Delete Book</Button>
        </Carousel.Caption>
      </Carousel.Item>
			
    ));
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.props.books.length ? (
          <Carousel>
            {books}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
