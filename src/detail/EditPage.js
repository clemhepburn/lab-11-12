import { Component } from 'react';
import AddPage from '../add/AddPage';
import './EditPage.css';

export default class EditPage extends Component {
  render() {
    return (
      <div className="EditPage">
        <AddPage {...this.props}/>
        
      </div>
    );
  }
}
