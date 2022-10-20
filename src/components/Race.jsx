import { useState, useEffect } from 'react';
import Contestant from './Contestant.jsx';
import { contestantStyles } from '../styles';
import { contestantData } from '../assets/data';
import { useNavigate } from 'react-router-dom';

function Race(props) {
  const [contestants, setContestants] = useState(contestantData);
  let navigateTo = useNavigate();

  const handleStop = () => {
    props.stopTimer();
    navigateTo('/config');
  };

  useEffect(() => {
    let newContestantPos = contestants.map((contestant) => {
      return {
        ...contestant,
        xpos: contestant.xpos + Math.floor(Math.random() * 10),
      };
    });
    setContestants(newContestantPos);
  }, [props.currentTime]);

  return (
    <div style={contestantStyles.contestantList}>
      {contestants.map((contestant) => (
        <Contestant
          key={contestant.id}
          name={contestant.name}
          xpos={contestant.xpos}
        />
      ))}
      <button onClick={handleStop}>Stop the Timer!</button>
    </div>
  );
}
export default Race;