/*global kakao*/
import './App.css';
import Cafeteria from './Cafeteria';
import Location from './Location';
import logo from './logo.png';

function App() {
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} alt='logo' />
        </header>
        <main>
          <Location />
          <Cafeteria />
        </main>
      </div>
    </>
  );
}

export default App;
