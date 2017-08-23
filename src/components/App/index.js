import React, { Component } from 'react';
import Search from '../Search';
import Table from '../Table';
import School from '../School';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
      basicInfoResult: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
    }

    this.searchSchoolData = this.searchSchoolData.bind(this);
    this.fetchSchoolBasicInfoById = this.fetchSchoolBasicInfoById.bind(this);

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.searchSchoolData(searchTerm);
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;

    this.setState({ searchKey: searchTerm });
    this.setState({ basicInfoResult: null });
    
    this.searchSchoolData(searchTerm);

    event.preventDefault();
  }

  searchSchoolData(searchTerm) {
    const url = `${API_BASE_PATH}${BASIC_INFO}${SEARCH}${searchTerm}`;

    fetch(url)
      .then(response => response.json())
      .then(result => this.setSearchResults(result));
  }

  setSearchResults(result) {
    this.setState((prevState, props) => ({ 
      searchResults: result 
    }));
  }

  fetchSchoolBasicInfoById(unitId) {
    const url = `${API_BASE_PATH}${BASIC_INFO}${unitId}`

    fetch(url)
      .then(response => response.json())
      .then(result => this.setBasicInfo(result));
  }

  setBasicInfo(result) {
    this.setState((prevState, props) => ({
      basicInfoResult: result
    }));
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {

    const { 
      searchResults, 
      searchTerm, 
      basicInfoResult
    } = this.state;

    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          { basicInfoResult
          ?
            <div className="school-container">
              <School
                searchValue={searchTerm}
                onSearchChange={this.onSearchChange}
                onSearchSubmit={this.onSearchSubmit}
                basicInfoResult={basicInfoResult}
              >
              </School>
            </div>
            :
            <div className="search-container">
              <Search
                value={searchTerm}
                onChange={this.onSearchChange}
                onSubmit={this.onSearchSubmit}
              />

              <Table
                searchResults={searchResults}
                fetchBasicInfo={this.fetchSchoolBasicInfoById}
              />
            </div>
          }
        </MuiThemeProvider>
    );
  }
}

export default App;
