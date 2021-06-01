import { Component } from 'react';
import { addCat } from '../utils/famous-cats-api.js';
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

  onSubmit = async e => {
    e.preventDefault();
    await addCat(this.state);
    this.props.history.push('/cats/');
  }

  onChange = e => {
    console.log(e.target.value);
    const obj = {};
    switch (e.target.type) {
      case ('number'):
        obj[e.target.name] = Number(e.target.value);
        this.setState(obj);
        break;
      case ('text'):
        obj[e.target.name] = e.target.value;
        this.setState(obj);
        break;
      case ('checkbox'):
        obj[e.target.name] = e.target.checked;
        this.setState(obj);
        break;
      default:
        console.log('hello');
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="AddPage">
        <h2 className="page-title">Add a New Cat</h2>
        <fieldset>
          <label>
            name:
            <input onChange={this.onChange} name="name" type="text" required />
          </label>
          <label>
            type:
            <input onChange={this.onChange} name="type" type="text" required />
          </label>
          <label>
            image:
            <input onChange={this.onChange} name="url" type="text" required />
          </label>
          <label>
            year:
            <input onChange={this.onChange} name="year" defaultValue="1996" type="number" />
          </label>
          <label>
            lives:
            <input onChange={this.onChange} name="lives" type="number" min="0" max="9" defaultValue="9" />
          </label>
          <label>
            sidekick?:
          </label>
        </fieldset>
        <button type="submit">Add</button>
        
      </form>
    );
  }
}
