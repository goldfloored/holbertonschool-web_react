import logo from './define.jpeg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>School dashboard</h1>
      </header>
      <hr></hr>
      <body className='App-boody'>
        <p>Login to access the full dashboard</p>
      </body>
      <hr></hr>
      <footer className='App-footer'>
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
