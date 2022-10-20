import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Configuration from './components/Configuration';
import Timer from './components/Timer';
import Race from './components/Race';
import { useState, useRef } from 'react';
import Background from './components/Background';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [numPlayers, setNumPlayers] = useState(20);

  let interval = useRef();
  function startTimer() {
    interval.current = setInterval(() => {
      setCurrentTime((timer) => timer - 1);
    }, 1000);
  }
  function stopTimer() {
    console.log('stopping');
    clearInterval(interval.current);
  }

  return (
    <>
      <Router>
        <Link to="/config">Config Screen</Link> |{' '}
        <Link to="/timer">Timer Screen</Link>
        <Routes>
          <Route
            path="/config"
            element={
              <Configuration
                length={currentTime}
                setLength={setCurrentTime}
                numPlayers={numPlayers}
                setNumPlayers={setNumPlayers}
                startTimer={startTimer}
              />
            }
          />
          <Route
            path="/timer"
            element={
              <Background>
                <Timer currentTime={currentTime} />
                <Race
                  numPlayers={numPlayers}
                  currentTime={currentTime}
                  stopTimer={stopTimer}
                />
              </Background>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
export default App;