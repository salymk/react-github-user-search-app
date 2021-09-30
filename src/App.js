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
  const { data, isLoading, isError, error } = useProfile(username);

  if (isError) return `An error has occured: ${error.message}`;

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
        <UserContainer>
          <div className="user-container">
            {isLoading ? (
              '...'
            ) : (
              <>
                <UserHeader
                  img={data.avatar_url}
                  name={data.name}
                  url={data.url}
                  login={data.login}
                  created_at={data.created_at}
                />
                <div className="user-content">
                  <p className="bio">{data.bio}</p>

                  <UserStats
                    repos={data.public_repos}
                    followers={data.followers}
                    following={data.following}
                  />
                  <UserLinks />
                </div>
              </>
            )}
          </div>
        </UserContainer>
        {/* <UserContainer /> */}
      </main>
    </>
  );
}

export default App;
