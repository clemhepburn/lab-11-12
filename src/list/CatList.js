import { Component } from 'react';
import { Link } from 'react-router-dom';
import './CatList.css';

export default class CatList extends Component {
  render() {
    return (
      <div className="cat-div">
        <ul>

        </ul>

        <Link to="/">time to go home</Link>
        
      </div>
    );
  }
}
