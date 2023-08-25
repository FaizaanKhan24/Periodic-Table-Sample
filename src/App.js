import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <HomePage />
      </header>
    </div>
  );
}

export default App;
