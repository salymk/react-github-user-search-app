import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './styles/App.scss';
import UserContainer from './components/UserContainer';
import useProfile from './hooks/useProfile';

function App() {
  const [input, setInput] = useState('');
  const [username, setUserName] = useState('salymk');
  const { data, isLoading, isError, error, isFetching } = useProfile(username);

  if (error) return `An error has occured: ${error.message}`;

  console.log(data);
  console.log(isError);

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
        {isLoading ? 'Loading...' : <UserContainer bio={data?.bio} />}
        {/* <UserContainer /> */}
      </main>
    </>
  );
}

export default App;
