/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import SearchIcon from '../icon-components/SearchIcon';

const SearchBar = (props) => (
  // const [input, setInput] = useState('');
  // const [username, setUserName] = useState('');

  // const { data, error, isLoading, isError } = useQuery(
  //   ['profile', username],
  //   () =>
  //     fetch(`https://api.github.com/users/${username}`).then((res) =>
  //       res.json()
  //     ),
  //   {
  //     enabled: Boolean(username),
  //   }
  // );

  // if (isLoading) return 'Loading...';
  // if (error) return `An error has occured: ${error.message}`;

  // console.log(data);
  // console.log(isError);

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
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            {...props}
          />
          <SearchIcon viewBox="0 0 24 24" className="search-icon" />
          <button
            // onClick={() => {
            //   setUserName(input);
            //   setInput('');
            // }}
            // eslint-disable-next-line react/destructuring-assignment
            className="search-btn"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  </>
);
export default SearchBar;
