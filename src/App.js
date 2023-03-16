import logo from './logo.svg';
import './App.css';
import Character from './components/Character';
import CharacterGallery from './components/CharacterGallery';

function App() {
  return (
    <div className="App" data-test='component-app'>
      <CharacterGallery />
    </div>
  );
}

export default App;
