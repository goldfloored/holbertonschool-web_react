import logo from './define.jpeg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

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
        <form>
          <label> Email: &nbsp;
            <input required type='text' placeholder='email' />
          </label>
          <label> Password: &nbsp;
            <input required type='text' placeholder='password' />
          </label>
          <button type='submit'>OK</button>
        </form>

      </body>
      <hr></hr>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
