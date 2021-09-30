/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../icon-components/SearchIcon';

const SearchBar = (props) => (
  <>
    <div className="search-wrap">
      <form onSubmit={props.onSubmit}>
        <label className="sr-only" htmlFor="search">
          Search for github user <span />
        </label>
        <div className="search-wrap__search-box">
          <input
            id="search"
            name="search"
            placeholder="Search GitHub username..."
            {...props}
          />
          <SearchIcon viewBox="0 0 24 24" className="search-icon" />
          <button className="search-btn" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  </>
);
export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
