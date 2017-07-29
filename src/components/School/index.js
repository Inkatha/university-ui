import React, { Component } from 'react';
import Search from '../Search';

import './index.css';

import {
  API_BASE_PATH,
  COST_TO_ATTEND,
  DEGREES_AWARDED,
  DIVERSITY_STATISTICS,
  EARNINGS_AFTER_GRADUATION,
} from '../../constants'

class School extends Component {

  constructor(props) {
    super(props)

    this.state = {
      costToAttendResult: null,
      degreesAwardedResult: null,
      diversityStatisticResult: null,
      earningsAfterGraduationResult: null,
    }

    this.fetchCostToAttendById = this.fetchCostToAttendById.bind(this);
    this.setCostToAttend = this.setCostToAttend.bind(this);

    this.fetchDegreesAwardedById = this.fetchDegreesAwardedById.bind(this);
    this.setDegreesAwarded = this.setDegreesAwarded.bind(this);

    this.fetchDiversityStatisticsById = this.fetchDiversityStatisticsById.bind(this);
    this.setDiversityStatistics = this.setDiversityStatistics.bind(this);

    this.fetchEarningsAfterGraduationById = this.fetchEarningsAfterGraduationById.bind(this);
    this.setEarningsAfterGraduation = this.setEarningsAfterGraduation.bind(this);
  }

  fetchCostToAttendById(unitId) {
    const url = `${API_BASE_PATH}${COST_TO_ATTEND}${unitId}`

    fetch(url) 
      .then(response => response.json())
      .then(result => this.setCostToAttend(result));
  }

  setCostToAttend(result) {
    this.setState((prevState, props) => ({
      costToAttendResult: result
    }));
  }

  fetchDegreesAwardedById(unitId) {
    const url =  `${API_BASE_PATH}${DEGREES_AWARDED}${unitId}`

    fetch(url)
      .then(response => response.json())
      .then(result => this.setDegreesAwarded(result));
  }

  setDegreesAwarded(result) {
    this.setState((prevState, props) => ({
      degreesAwardedResult: result
    }));
  }

  fetchDiversityStatisticsById(unitId) {
    const url = `${API_BASE_PATH}${DIVERSITY_STATISTICS}${unitId}`

    fetch(url)
      .then(response => response.json())
      .then(result => this.setDiversityStatistics(result));
  }

  setDiversityStatistics(result) {
    this.setState((prevState, props) => ({
      diversityStatisticResult: result
    }));
  }

  fetchEarningsAfterGraduationById(unitId) {
    const url = `${API_BASE_PATH}${EARNINGS_AFTER_GRADUATION}${unitId}`

    fetch(url)
      .then(response => response.json())
      .then(result => this.setEarningsAfterGraduation(result));
  }

  setEarningsAfterGraduation(result) {
    this.setState((prevState, props) => ({
      earningsAfterGraduationResult: result
    }));
  }

  render() {

    const {
      searchValue,
      onSearchChange,
      onSearchSubmit,
      basicInfoResult
    } = this.props; 

    return (
      <div>
         
        <div className="search-container"> 
          <Search
            value={searchValue}
            onChange={onSearchChange}
            onSubmit={onSearchSubmit}
            children
          >
            Search
          </Search>
        </div>
        
        <div className="school-information">
          <h1>{basicInfoResult.instnm}</h1>
          <h2>{basicInfoResult.city}, {basicInfoResult.stabbr}</h2>
          <h2><a target="_blank" href={basicInfoResult.insturl}>{basicInfoResult.insturl}</a></h2>
          <h2><a target="_blank" href={basicInfoResult.npcurl}>Cost to Attend Calculator</a></h2>
        </div>

        <div>
          <button
            onClick = {() => this.fetchCostToAttendById(basicInfoResult.unitid)}
          >
            Cost To Attend
          </button>

          <button
            onClick = {() => this.fetchDegreesAwardedById(basicInfoResult.unitid)}
          >
            Degrees Awarded
          </button> 
          <button
            onClick = {() => this.fetchDiversityStatisticsById(basicInfoResult.unitid)}
          >
            Diversity Statistics
          </button>
          <button
            onClick = {() => this.fetchEarningsAfterGraduationById(basicInfoResult.unitid)}
          >
            Earnings After Graduation
          </button>
        </div>
      </div>
    )
  }
}

export default School;