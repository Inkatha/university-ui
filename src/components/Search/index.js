import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
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
          <TextField
            floatingLabelText="Search for a school"
            name="material-ui-textfield" 
            className="search-text-box"
            value={value}
            onChange={onChange}
            ref={(node) => {
              this.input = node;
            }} 
          />
            <RaisedButton className="search-button" type="submit">
              {children}
            </RaisedButton>
        </form>
      );
    }
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default Search;