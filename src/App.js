import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import About from './About.js';
import BestBooks from './BestBooks.js';
import BookFormModal from './BookFormModal.js';
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
			books: [],

		}
	}

  getBooks = async() => {
    try{
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
	}

	removeDeletedBook = (books) => {
		// console.log(books)
		this.setState({
			books: books
		})
	}

	handleShowModal = (event) => {
		event.preventDefault();
		this.setState({
			showModal: true
		})

	}
	handleCloseModal = (event) => {
		event.preventDefault();
		this.setState({
			showModal: false
		})
	}
	render() {
		return (
			<>
				<Router>
					<Header />
					<h1>Super Rad Books!</h1>

					<BookFormModal 
					showModal={this.state.showModal} 
					handleCloseModal={this.handleCloseModal} updateBookState={this.updateBookState}/>
						
					<span className='route-span'>

						<Routes>
								<Route
									exact path="/"
									element={<BestBooks 
									books={this.state.books}
									removeDeletedBook={this.removeDeletedBook}
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
			</>
		);
	}
}

export default App;
