import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <Navbar className='nav-bar' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <div>
          <NavItem className='nav-i'><Link to="/" className="nav-link">Home</Link></NavItem>
          <NavItem className='nav-i'><Link to="/about" className="nav-link">About</Link></NavItem>
        </div>
      </Navbar>
    );
  }
}

export default Header;
