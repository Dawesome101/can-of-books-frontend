import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class BookFormModal extends React.Component {

handleCreateBook = async (bookInfo) => {
	console.log(bookInfo);
	try {
		const response = await axios.post(`${process.env.REACT_APP_SERVER}/books`, bookInfo);
		const newBook = response.data;
		console.log('were looking for this' + newBook);
		this.props.updateBookState(newBook);
		// console.log('after' + newBook);
		// this.setState({
		// 	books: [...this.state.books, newBook]
		// })
	} catch (error){
		console.log('error is book post: ', error.response)
	}
};

handleSubmit = (event) => {
	event.preventDefault();
	this.handleCreateBook({
		title: event.target.formAddBookTitle.value,
		description: event.target.formAddBookDescription.value,
		status: event.target.formStatusCheckbox.checked
	});
}

	render() {

		return (

			<Modal
				show={this.props.showModal}
				onHide={this.props.handleCloseModal}
				size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

				<Modal.Dialog>

					<Modal.Header>
						<Modal.Title>Add a new book</Modal.Title>
					</Modal.Header>

					<Modal.Body>

						<Form onSubmit={this.handleSubmit}>

							<Form.Group className="mb-3" controlId="formAddBookTitle">

								<Form.Label>Book Title</Form.Label>

								<Form.Control type="text" placeholder="What is the name of your book?" />

								<Form.Text className="text-muted">
									Add a new book title.
								</Form.Text>

							</Form.Group>

							<Form.Group className="mb-3" controlId="formAddBookDescription">

								<Form.Label>Description</Form.Label>

								<Form.Control type="text" placeholder="What is your book about?" />

							</Form.Group>

							<Form.Group className="mb-3" controlId="formStatusCheckbox">
								<Form.Check type="checkbox" label="Have you read this book?" />

							</Form.Group>

							<Button variant="primary" type="submit">
								Add this book!
							</Button>

						</Form>

					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={this.props.handleCloseModal}>Close</Button>
					</Modal.Footer>

				</Modal.Dialog>
			</Modal>
		);
	}
}

export default BookFormModal;
