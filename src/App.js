import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './styles/App.scss';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <SearchBar />
      </main>
    </>
  );
}

export default App;
