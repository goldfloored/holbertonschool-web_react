import logo from './logo.jpeg';
import './App.css';
import {getFooterCopy, getFullYear} from './utils';

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
      </body>
      <footer className="App-footer">
        <p><em>Copyright {getFullYear()} - {getFooterCopy(true)}</em></p>
      </footer>
    </div>
  );
}

export default App;
