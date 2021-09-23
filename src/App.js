import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './styles/App.scss';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <SearchBar />
        <UserContainer />
      </main>
    </>
  );
}

export default App;
