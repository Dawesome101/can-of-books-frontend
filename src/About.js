import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Tylerimg from './img/profile-tyler.jpg'
import Danimg from './img/profile-dan.png'

class About extends Component {

  render() {
		return(
			<div className='cards-cnt'>
				<h1>About Super Rad Books!</h1>
			
				<Card style={{ width: '18rem' }}>

					<Card.Img variant="top" src={Tylerimg} />

					<Card.Body>

						<Card.Title>Tyler Main</Card.Title>

						<Card.Text>
							I'm Tyler Main, I enjoy long walks on the beach and relaxing music. Super Rad Books was started by two people who have never met each other in real life but somehow found incredible success among less than tens of people.
						</Card.Text>

					</Card.Body>

				</Card>

				<Card style={{ width: '18rem' }}>

					<Card.Img variant="top" src={Danimg} />

					<Card.Body>

						<Card.Title>Dan Awesome</Card.Title>

						<Card.Text>
							I'm Dan and I love skydiving and muskrat hunting. That's as far as I got. 
						</Card.Text>

					</Card.Body>

				</Card>

			</div>
		)
  }
}

export default About;
