import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <PersonCard lastName="Doe" firstName="Jane" age={45} hair="Black"></PersonCard>
       <PersonCard lastName="Smith" firstName="John" age={88} hair="Brown"></PersonCard>
       <PersonCard lastName="Filmore" firstName="Millard" age={50} hair="Brown"></PersonCard>
       <PersonCard lastName="Smith" firstName="Maria" age={62} hair="Brown"></PersonCard>
      </header>
    </div>
  );
}

export default App;
