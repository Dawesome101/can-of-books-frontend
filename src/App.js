import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import About from './About.js';
import BestBooks from './BestBooks.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Header />
          <h1>Super Rad Books!</h1>
          <Routes>
            <Route
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
            <Route
              exact path="about"
              element={<About />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
