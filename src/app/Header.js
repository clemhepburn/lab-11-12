import { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <h1>Famous Cats</h1>
        <nav className="nav">
          <Link to="/">home</Link>
          <Link to="/cats/">cats</Link>
        </nav>

        
      </header>
    );
  }

}
 
export default Header;