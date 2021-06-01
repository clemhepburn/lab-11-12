import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <h2 className="page-title">Home Page</h2>

        <Link to='/resources'>Let's see some cats</Link>
      </div>
    );
  }

}