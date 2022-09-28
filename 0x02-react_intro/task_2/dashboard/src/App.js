import logo from './logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <link rel="icon" 
      type="image/png" 
      href="http://example.com/myicon.png"></link>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
        
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password"/>
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p><em>Copyright 2020 - holberton School</em></p>
      </footer>
    </div>
  );
}

export default App;
