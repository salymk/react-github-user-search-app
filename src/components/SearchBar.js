import React from 'react';
import SearchIcon from '../icon-components/SearchIcon';
import SearchSVG from '../assets/icon-search.svg';

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
      <SearchIcon viewBox="0 0 24 24" className="search-icon" />

      <button type="submit">Search</button>
    </div>
  </div>
);

export default SearchBar;
