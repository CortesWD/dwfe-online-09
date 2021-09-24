import './App.css';
import Button from './components/button/Button';

function App() {
  function handleButton() {
    console.log('hola mundo');
  }

  return (
    <div className="App">
      <Button
        onClick={handleButton}
      >
        
      </Button>
    </div>
  );
}

export default App;
