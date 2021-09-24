import React, { useState, useEffect } from 'react';
import SearchIcon from '../icon-components/SearchIcon';

function getGithubProfile(username) {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
}

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [username, setUserName] = useState('salymk');
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function handleSubmit() {
    return setUserName(input);
  }

  useEffect(() => {
    getGithubProfile(username)
      .then((data) => {
        setProfile(data);
        setError(null);
        setLoading(false);
      })
      .catch((e) => {
        console.warn(e.message);
        setError('No result');
        setLoading(false);
      });
  }, [username]);

  console.log(profile);

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
        />
        <SearchIcon viewBox="0 0 24 24" className="search-icon" />

        <button onClick={handleSubmit} className="search-btn" type="submit">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
