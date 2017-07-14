import React, { Component } from 'react';
import Search from '../Search'
import './index.css';

import {
  DEFAULT_QUERY,
  SEARCH_PATH_BASE
} from '../../constants'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
    }

    this.fetchSchoolData = this.fetchSchoolData.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm })
    this.fetchSchoolData(searchTerm);
  }

  fetchSchoolData(searchTerm) {
    const url = `${SEARCH_PATH_BASE}${searchTerm}`;

    fetch(url)
      .then(response => response.json())
      .then(result => this.setSchoolData(result));
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    
    this.fetchSchoolData(searchTerm);

    event.preventDefault();
  }

  setSchoolData(result) {
    this.setState({ results: result });
  }

  render() {

    const { results, searchTerm } = this.state;

    return (
      <div>
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        >
          Search
        </Search>

        { results ? <h1>{results[0].instnm}</h1> : <h1>School Name Here</h1> }

      </div> 
    );
  }
}

export default App;
