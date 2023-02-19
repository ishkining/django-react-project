import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Numbers from './components/numbers';
import styled from 'styled-components';

function createAlert(){
  alert('hello');
}

const pStyle = {
  fontSize: '2em',
  color: 'red',
}

const Paragraph = styled.p`
  font-size: 3em;
  color: black;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Numbers />
      </header>
    </div>
  );
}

export default App;