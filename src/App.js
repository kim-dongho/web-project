import './App.css';
import Home from './routes/Home';

function App() {
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <div className='navbar'>
            <div className='navbar__logo'>
              <span>눈치보지마</span>
            </div>
            <div className='navbar__item'>
              <ul>
                <li>Home</li>
                <li>Map</li>
              </ul>
            </div>
          </div>
          <div className=''></div>
        </header>
        <main>
          <Home />
        </main>
      </div>
    </>
  );
}

export default App;
