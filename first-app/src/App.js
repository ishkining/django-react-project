import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function createAlert(){
  alert('hello');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header info="this is my message"/>
        <p>Main content</p>
        <Footer myalert={createAlert}/>
      </header>
    </div>
  );
}

export default App;