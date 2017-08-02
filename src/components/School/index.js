import React, { Component } from 'react';
import Search from '../Search';

import './index.css';

import {
  API_BASE_PATH,
  COST_TO_ATTEND,
  DEGREES_AWARDED,
  DIVERSITY_STATISTICS,
  EARNINGS_AFTER_GRADUATION,
  FINANCIAL_AID_PROVIDED,
  INSTITUTION_TYPE,
  RETENTION_RATES,
  STANDARDIZED_TEST_AVERAGES,
  STUDENT_LOAN_DEBTS,
} from '../../constants'

class School extends Component {

  constructor(props) {
    super(props)

    this.state = {
      costToAttendResult: null,
      degreesAwardedResult: null,
      diversityStatisticResult: null,
      earningsAfterGraduationResult: null,
      institutionType: null,
      retentionRates: null,
      studentLoanDebts: null
    }

    this.fetchCostToAttendById = this.fetchCostToAttendById.bind(this);
    this.setCostToAttend = this.setCostToAttend.bind(this);

    this.fetchDegreesAwardedById = this.fetchDegreesAwardedById.bind(this);
    this.setDegreesAwarded = this.setDegreesAwarded.bind(this);

    this.fetchDiversityStatisticsById = this.fetchDiversityStatisticsById.bind(this);
    this.setDiversityStatistics = this.setDiversityStatistics.bind(this);

    this.fetchEarningsAfterGraduationById = this.fetchEarningsAfterGraduationById.bind(this);
    this.setEarningsAfterGraduation = this.setEarningsAfterGraduation.bind(this);

    this.fetchFinancialAidProvidedById = this.fetchFinancialAidProvidedById.bind(this);
    this.setFinancialAidProvided = this.setFinancialAidProvided.bind(this);

    this.fetchInstitutionTypeById = this.fetchInstitutionTypeById.bind(this);
    this.setInstitutionType = this.setInstitutionType.bind(this);

    this.fetchRetentionRatesById = this.fetchRetentionRatesById.bind(this);
    this.setRetentionRates = this.setRetentionRates.bind(this);

    this.fetchStandardizedTestAveragesById = this.fetchStandardizedTestAveragesById.bind(this);
    this.setStandardizedTestAverages = this.setStandardizedTestAverages.bind(this);

    this.fetchStudentLoanDebtsById = this.fetchStudentLoanDebtsById.bind(this);
    this.setStudentLoanDebt = this.setStudentLoanDebt.bind(this);
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
    const url =  `${API_BASE_PATH}${DEGREES_AWARDED}${unitId}`;

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
    const url = `${API_BASE_PATH}${DIVERSITY_STATISTICS}${unitId}`;

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
    const url = `${API_BASE_PATH}${EARNINGS_AFTER_GRADUATION}${unitId}`;

    fetch(url)
      .then(response => response.json())
      .then(result => this.setEarningsAfterGraduation(result));
  }

  setEarningsAfterGraduation(result) {
    this.setState((prevState, props) => ({
      earningsAfterGraduationResult: result
    }));
  }

  fetchFinancialAidProvidedById(unitId) {
    const url = `${API_BASE_PATH}${FINANCIAL_AID_PROVIDED}${unitId}`;

    fetch(url)
      .then(response => response.json())
      .then(result => this.setFinancialAidProvided(result));
  }

  setFinancialAidProvided(result) {
    this.setState((prevState, props) => ({ 
      financialAidProvidedResult: result
     }));    
  }

  fetchInstitutionTypeById(unitId) {
    const url = `${API_BASE_PATH}${INSTITUTION_TYPE}${unitId}`

    fetch(url)
      .then(response => response.json())
      .then(result => this.setInstitutionType(result));
  }

  setInstitutionType(result) {
    this.setState((prevState, props) => ({
      institutionType: result
    }));
  }

  fetchRetentionRatesById(unitId) {
    const url = `${API_BASE_PATH}${RETENTION_RATES}${unitId}`

    fetch(url)
      .then(response => response.json())
      .then(result => this.setRetentionRates(result));
  }

  setRetentionRates(result) {
    this.setState((prevState, props) => ({
      retentionRates: result
    }));
  }

  fetchStandardizedTestAveragesById(unitId) {
    const url = `${API_BASE_PATH}${STANDARDIZED_TEST_AVERAGES}${unitId}`;

    fetch(url)
      .then(response => response.json())
      .then(result => this.setStandardizedTestAverages(result));

    console.log(this.state.standardizedTestAverages);
  }

  setStandardizedTestAverages(result) {
    this.setState((prevState, props) => ({
      standardizedTestAverages: result
    }));
  }

  fetchStudentLoanDebtsById(unitId) {
    const url = `${API_BASE_PATH}${STUDENT_LOAN_DEBTS}${unitId}`;

    fetch(url)
      .then(response => response.json())
      .then(result => this.setStudentLoanDebt(result))
    
    console.log(this.state.studentLoanDebts)
  }

  setStudentLoanDebt(result) {
    this.setState((prevState, props) => ({
      studentLoanDebts: result
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

          <button
            onClick = {() => this.fetchFinancialAidProvidedById(basicInfoResult.unitid)}
          >
            Average Financial Aid Provided
          </button>

          <button
            onClick = {() => this.fetchInstitutionTypeById(basicInfoResult.unitid)}
          >
            Institution Type
          </button>

          <button
            onClick = {() => this.fetchRetentionRatesById(basicInfoResult.unitid)}
          >
            Retention Rates
          </button>

          <button
            onClick = {() => this.fetchStandardizedTestAveragesById(basicInfoResult.unitid)}
          >
            Standardized Test Averages
          </button>

          <button
            onClick = {() => this.fetchStudentLoanDebtsById(basicInfoResult.unitid)}
          >
            Average Graduate's Student Loan Debt
          </button>
        </div>
      </div>
    )
  }
}

export default School;