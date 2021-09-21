import React from 'react';
import SearchIcon from '../icon-components/SearchIcon';

const SearchBar = () => (
  <div className="search-wrap">
    <label className="sr-only" htmlFor="search">
      Search for github user
    </label>
    <div className="search-wrap__search-box">
      <input
        id="search"
        name="search"
        placeholder="Search GitHub username..."
      />
      <SearchIcon className="search-icon" />

      <button type="submit">Search</button>
    </div>
  </div>
);

export default SearchBar;
