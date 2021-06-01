import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCats } from '../utils/famous-cats-api.js';
import CatItem from './CatItem.js';
import './CatList.css';

export default class CatList extends Component {
  state = {
    cats: []
  };

  async componentDidMount() {
    const cats = await getCats();
    if (!cats) console.log('nope!');
    else this.setState({ cats: cats });

  }

  render() {
    return (
      <div className="CatList">
        <ul>
          {this.state.cats && this.state.cats.map(cat => 
            <CatItem key={cat.id} data={cat}/>)}
        </ul>

        <Link to="/">time to go home</Link>
        
      </div>
    );
  }
}
