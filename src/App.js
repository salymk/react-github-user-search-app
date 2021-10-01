/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './styles/App.scss';
import UserContainer from './components/UserContainer';
import useProfile from './hooks/useProfile';
import UserHeader from './components/UserHeader';
import UserLinks from './components/UserLinks';
import UserStats from './components/UserStats';

function App() {
  const [input, setInput] = useState('');
  const [username, setUserName] = useState('salymk');
  const { data, error, status } = useProfile(username);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(input);
  };

  return (
    <>
      <Header />
      <main className="container">
        <SearchBar
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSubmit={handleSubmit}
        />

        {status === 'loading' ? (
          <p>Loading...</p>
        ) : status === 'error?' ? (
          <p>Error: {error.response.json()}</p>
        ) : (
          <UserContainer>
            <div className="user-container">
              <UserHeader
                img={data?.avatar_url}
                name={data?.name}
                url={data?.url}
                login={data?.login}
                created_at={data?.created_at}
              />
              <div className="user-content">
                <p className="bio">{data?.bio}</p>

                <UserStats
                  repos={data?.public_repos}
                  followers={data?.followers}
                  following={data?.following}
                />
                <UserLinks
                  location={data?.location}
                  website={data?.blog}
                  twitter={data?.twitter_username}
                  company={data?.company}
                />
              </div>
            </div>
          </UserContainer>
        )}
      </main>
    </>
  );
}

export default App;
