import './App.css';
import {multiply, divide, add, subtract} from '@bonigh/lesson8'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input id = "num1" />
        <input id = "num2" />
        <button onClick={() => alert(multiply(document.getElementById('num1').value, document.getElementById('num2').value))}>Multiply</button>
        <button onClick={() => alert(divide(document.getElementById('num1').value, document.getElementById('num2').value))}>Divide</button>
        <button onClick={() => alert(add(document.getElementById('num1').value, document.getElementById('num2').value))}>Add</button>
        <button onClick={() => alert(subtract(document.getElementById('num1').value, document.getElementById('num2').value))}>subtract</button>
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
