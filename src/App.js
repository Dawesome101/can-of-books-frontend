import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import About from './About.js'
import BestBooks from './BestBooks.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     books: [],
  //   }
  // }

  // getBooks = async() => {
  //   try{
  //     let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
  //     this.setState({
  //       books: bookData.data,
  //     })
  //   } catch(error){
  //     console.log('We have an error: ', error.response);
  //   }
  // }

  // componentDidMount(){
  //   this.getBooks();
  // }

  render() {
    //console.log(this.state.books);

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
