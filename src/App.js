import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import About from './About.js';
import BestBooks from './BestBooks.js';
import BookFormModal from './BookFormModal.js';
import BookUpdateModal from './BookUpdateModal.js';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			showUpdateModal: false,
			books: [],
			book: {},
		}
	}

  getBooks = async() => {
    try{
			console.log('updated');
      let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      this.setState({
        books: bookData.data
      });
    } catch(error){
      console.log('We have an error: ', error.response);
    }
  };

  componentDidMount(){
    this.getBooks();
  }

	updateBookState = (book) => {
		this.setState({
			books: [...this.state.books, book]
		})
		this.getBooks();
	}

	removeDeletedBook = (filteredBooks) => {
		this.setState({
			books: filteredBooks
		})
	}

	updatedBookArray = (books) => {
		this.setState({
			books: books
		})
	}

	handleShowModal = () => {
		this.setState({
			showModal: true
		})
	}

	handleCloseModal = () => {
		this.setState({
			showModal: false
		})
	}

	handleShowUpdateModal = (book) => {
		this.setState({
			book: book,
			showUpdateModal: true
		})
	}

	handleCloseUpdateModal = () => {
		this.setState({
			showUpdateModal: false
		})
	}

	render() {
		return (
			<div className='div-main'>

				<Router>

					<Header className='header' />
					<h1>Super Rad Books!</h1>

					<BookFormModal 
					showModal={this.state.showModal} 
					handleCloseModal={this.handleCloseModal} 
					updateBookState={this.updateBookState}/>
						
					<BookUpdateModal 
					showUpdateModal={this.state.showUpdateModal}
					handleCloseUpdateModal={this.handleCloseUpdateModal}
					updatedBookArray={this.updatedBookArray}
					books={this.state.books}
					book={this.state.book}/>

					<span className='route-span'>
						
						<Routes>
								<Route
									exact path="/"
									element={<BestBooks 
										books={this.state.books}
										removeDeletedBook={this.removeDeletedBook}
										getBooks={this.getBooks}
										handleShowUpdateModal={this.handleShowUpdateModal}
									/>}
								>
								</Route>
							<Route
								exact path="about"
								element={<About />}
								>
							</Route>

						</Routes>

					</span>

					<Button 
					variant="success" 
					onClick={this.handleShowModal}>Add Book</Button>{''}
					
					<Footer />

				</Router>

			</div>
		);
	}
}

export default App;
