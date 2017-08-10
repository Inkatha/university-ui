import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css'

class Table extends Component {
  render() {

    const { 
      searchResults,
      fetchBasicInfo
    } = this.props;
    
    return (
      <div className="table-container">
        { searchResults 
          ? 
          searchResults.map(school => 
            <div key={school.unitid}>
              <h1>
                <RaisedButton 
                  onClick={() => fetchBasicInfo(school.unitid)}
                  className="school-name-button">
                  <span className="school-name">{school.instnm}</span>
                </RaisedButton>
              </h1> 
            </div>
          )
        : 
          <Loading />
        }
      </div>  
    );
  }
}

const Loading = () => 
  <div>
    <span className="sr-only">Loading...</span>
  </div>

export default Table;