import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import bookMockup from './img/book-mockup.jpg';
import Button from 'react-bootstrap/Button';
import './BeskBooks.css';

class BestBooks extends React.Component {
	handleDelete = async(bookToDelete) => {
		try {
			const response = await axios.delete(`${process.env.REACT_APP_SERVER}/books/${bookToDelete._id}`)
			console.log(response.status);
			const filteredBooks = this.props.books.filter(book => {
				return book._id !== bookToDelete._id;
			})
			this.props.removeDeletedBook(filteredBooks);
      this.props.getBooks();
		} catch(error){
		console.log(error)
		}
	}

  render() {
    let books = this.props.books.map((book, idx) => (

      <Carousel.Item className="carousel-item" key={book._id}>
        <img
          className={book._id}
          src={bookMockup}
          alt={book.title}
        />

        <Carousel.Caption className='carousel-capt'>
          <p>{book.title}</p>
          <p>{book.description}</p>

        <Button className='update-btn'
				variant="secondary" 
				onClick={() => this.props.handleShowUpdateModal(book)} >Update Book</Button>

        <Button className='delete-btn'
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
          <h3>No Books Found :(</h3>)}
      </>
    );
  }
}

export default BestBooks;
