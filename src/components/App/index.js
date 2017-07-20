import React, { Component } from 'react';
import Search from '../Search';
import Table from '../Table';
import './index.css';

import {
  DEFAULT_QUERY,
  API_BASE_PATH,
  BASIC_INFO,
  SEARCH
} from '../../constants'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      basicInfo: [],
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
    }

    this.searchSchoolData = this.searchSchoolData.bind(this);
    this.setBasicInfo = this.setBasicInfo.bind(this);
    this.fetchSchoolBasicInfoById = this.fetchSchoolBasicInfoById.bind(this);

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm })
    this.searchSchoolData(searchTerm);
  }

  searchSchoolData(searchTerm) {
    const url = `${API_BASE_PATH}${BASIC_INFO}${SEARCH}${searchTerm}`;

    fetch(url)
      .then(response => response.json())
      .then(result => this.setSearchResults(result));
  }

  fetchSchoolBasicInfoById(unitId) {
    const url = `${API_BASE_PATH}${BASIC_INFO}${unitId}`

    fetch(url)
      .then(response => response.json())
      .then(result => this.setBasicInfo(result))
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    
    this.searchSchoolData(searchTerm);

    event.preventDefault();
  }

  setSearchResults(result) {
    this.setState({ searchResults: result });
  }

  setBasicInfo(result) {
    console.log(result);
    this.setState({ basicInfo: result});
  }

  render() {

    const { searchResults, searchTerm } = this.state;

    return (
      <div className="App-container">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        >
          Search
        </Search>

        <Table
          searchResults={searchResults}
          fetchBasicInfo={this.fetchSchoolBasicInfoById}
        >
        </Table>        

      </div> 
    );
  }
}

export default App;
