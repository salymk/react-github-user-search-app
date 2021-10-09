/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import whatInput from 'what-input';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './styles/App.scss';
import UserContainer from './components/UserContainer';
import useProfile from './hooks/useProfile';
import UserHeader from './components/UserHeader';
import UserLinks from './components/UserLinks';
import UserStats from './components/UserStats';
import { ThemeProvider } from './contexts/theme';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () =>
    setTheme(() => (theme === 'light' ? 'dark' : 'light'));

  const [input, setInput] = useState('');
  const [username, setUserName] = useState('salymk');
  const { data, error, status } = useProfile(username);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(input);
  };

  React.useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  return (
    <>
      <ThemeProvider value={theme}>
        <Header toggleTheme={toggleTheme} />
        <main className="container">
          <SearchBar
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onSubmit={handleSubmit}
            error={error}
          />

          {status === 'loading' ? (
            <div className="lds-ellipsis">
              <div className={theme === 'dark' ? 'dark-mode' : ''} />
              <div className={theme === 'dark' ? 'dark-mode' : ''} />
              <div className={theme === 'dark' ? 'dark-mode' : ''} />
              <div className={theme === 'dark' ? 'dark-mode' : ''} />
            </div>
          ) : status === 'error' ? (
            <p>Error: {error.message}</p>
          ) : (
            <UserContainer>
              <div
                className={`user-container ${
                  theme === 'dark' ? 'dark-mode' : ''
                }`}
              >
                <UserHeader
                  img={data?.avatar_url}
                  name={data?.name}
                  url={data?.url}
                  login={data?.login}
                  created_at={data?.created_at}
                />
                <div className="user-content">
                  <p className={`bio ${theme === 'dark' ? 'dark-mode' : ''}`}>
                    {data?.bio}
                  </p>

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
      </ThemeProvider>
    </>
  );
}

export default App;
