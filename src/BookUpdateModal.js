import React from "react";
import { Container, Button, Form, Modal } from 'react-bootstrap';
import axios from "axios";

class BookUpdateModal extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();

    let bookToUpdate = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.checked || this.props.book.status,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }

    this.updateBooks(bookToUpdate)
  }

  updateBooks = async (bookToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`;
      let updatedBook = await axios.put(url, bookToUpdate);
      let updatedBookArray = this.props.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id
        ? updatedBook.data
        : existingBook
      });

      this.props.updatedBookArray(updatedBookArray);

    } catch(error){
      console.log('Error is book post: ', error.response);
    }
  }

  render() {
    return(
      <Modal
        show={this.props.showUpdateModal}
        onHide={this.props.handleCloseUpdateModal}
        size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Update Book with new Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder={this.props.book.title} />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder={this.props.book.description} />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Check type="checkbox" label="has-read" defaultChecked={this.props.book.status}/>
              </Form.Group>
              <Button type="submit">Update Book</Button>
            </Form>
          </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleCloseUpdateModal}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    )
  }
}

export default BookUpdateModal