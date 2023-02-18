import './App.css';
import { Header } from './components/header';

function OurText(){
  return <p>This is our text</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

export default App;
