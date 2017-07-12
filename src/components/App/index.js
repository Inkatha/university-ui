import React, { Component } from 'react';
import Search from '../Search'
import './index.css';

import {
  DEFAULT_QUERY,
  PATH_BASE
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
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm })
    this.fetchSchoolData(searchTerm);
  }

  fetchSchoolData(searchTerm) {
    const url = `${PATH_BASE}${searchTerm}`;

    fetch(url)
      .then(response => response.json())
      .then(result => this.setSchoolData(result));
  }

  setSchoolData(result) {
    const {results} = this.state
    this.setState({...results, result});
  }

  render() {

    const {results} = this.state;

    return (
      <div>
        <Search
          value="testing"
        >
          Search
        </Search>
      </div> 
    );
  }
}

export default App;
