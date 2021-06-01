import { Component } from 'react';
import { getCats } from '../utils/famous-cats-api.js';
import './AddPage.css';

export default class AddPage extends Component {
  state = {
    name: '',
    type: '',
    url: '',
    year: 0,
    lives: 0,
    isSidekick: false
  };

  render() {
    return (
      <form className="AddPage">
        <h2 className="page-title">Add a New Cat</h2>
        <fieldset>
          <label>
            name:
            <input type="text" required />
          </label>
          <label>
            type:
            <input type="text" required />
          </label>
          <label>
            image:
            <input type="text" required />
          </label>
          <label>
            year:
            <input type="number" required />
          </label>
          <label>
            year:
            <input type="number" min="0" max="9" placeholder="9" required />
          </label>
          <label>
            sidekick?:
            <input type="checkbox"/>
          </label>
        </fieldset>
        <button type="submit">Add</button>
        
      </form>
    );
  }
}
