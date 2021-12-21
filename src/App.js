import React, { useRef } from 'react';
import './App.css';
import Home from './routes/Home';

function App() {
  const mainRef = useRef();

  const handleIndexClick = () => {
    mainRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <div className='navbar'>
            <div className='navbar__logo'>
              <span>눈치보지마</span>
            </div>
          </div>
          <div className='App-info'>
            <div className='App-info-textBox'>
              <div className='App-info-text bigText'>주변 급식카드 사용처와 무료 급식소를 한눈에</div>
              <div className='App-info-text smallText'>
                현재 위치를 기준으로 5KM 내의 <br />
                급식카드 사용처와 무료 급식소의 <br />
                위치정보, 영업시간, 전화번호를 알려줍니다.
              </div>
            </div>
            <div className='App-button'>
              <button className='btn' onClick={handleIndexClick}>
                보러가기
              </button>
            </div>
          </div>
        </header>
        <main className='mainView' ref={mainRef}>
          <Home />
        </main>
      </div>
    </>
  );
}

export default App;
