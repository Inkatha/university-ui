import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Search extends Component {

    componentDidMount() {
      this.input.focus();
    }

    render() {
      const {
        value,
        onChange,
        onSubmit,
        children,
      } = this.props;

      return (
        <form onSubmit={onSubmit}>
          <input 
            className="search-text-box"
            value={value}
            onChange={onChange}
            ref={(node) => {
              this.input = node;
            }} 
          />
            <button className="search-button" type="submit">
              {children}
            </button>
        </form>
      );
    }
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default Search;