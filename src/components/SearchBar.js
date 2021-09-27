import React, { useState } from 'react';
import { useQuery } from 'react-query';
import SearchIcon from '../icon-components/SearchIcon';

function getGithubProfile(username) {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
}

const SearchBar = (props) => {
  const [input, setInput] = useState('');
  const [username, setUserName] = useState('salymk');

  const { data, error, isLoading, isFetching } = useQuery('profile', () =>
    fetch(`https://api.github.com/users/${username}`).then((res) => res.json())
  );

  if (isLoading) return 'Loading...';
  if (error) return `An error has occured: ${error.message}`;

  console.log(data);

  return (
    <div className="search-wrap">
      <label className="sr-only" htmlFor="search">
        Search for github user
      </label>
      <div className="search-wrap__search-box">
        <input
          id="search"
          name="search"
          placeholder="Search GitHub username..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          {...props}
        />
        <SearchIcon viewBox="0 0 24 24" className="search-icon" />
        {/* <span className="error">{error || ''}</span> */}
        <button
          onClick={() => setUserName(input)}
          className="search-btn"
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
