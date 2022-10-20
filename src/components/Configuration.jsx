import { useNavigate } from 'react-router-dom';
function Configuration(props) {
  let navigateTo = useNavigate();
  const handleStart = () => {
    props.startTimer();
    navigateTo('/timer');
  };
  return (
    <div>
      <label>Length of Timer (current:{props.length}):</label>
      <input
        type="text"
        value={props.length}
        onChange={(e) => props.setLength(e.target.value)}
      />
      <br />
      <label>Number of Contestants:</label>
      <input
        type="number"
        value={props.numPlayers}
        onChange={(e) => props.setNumContestants(e.target.value)}
      />
      <button onClick={handleStart}>Start the Timer!</button>
    </div>
  );
}
export default Configuration;