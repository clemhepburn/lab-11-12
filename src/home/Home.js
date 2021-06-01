import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <h2 className="page-title">welcome to the famous cats page. hit the link below to see some cats</h2>

        <Link to='/cats'>Let's see some cats</Link>
      </div>
    );
  }

}