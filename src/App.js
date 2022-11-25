import './App.css';
import Board from './components/Board/Board';
import logo from './images/forbesLogo.png'

function App() {
  return (
    <div className='app'>
      <h1 className='heading'>
        <img className='logo' src={logo} alt='FORBES'/>
        <div className='question'>WANT to PLAY?</div>
        <div className='about'>Lights Out is an electronic game released by Tiger Electronics in 1995. The game consists of a 5 by 5 grid of lights. When the game starts, a random number or a stored pattern of these lights is switched on. Pressing any of the lights will toggle it and the adjacent lights.</div>
        <div className='name'>FORBES LIGHTS OUT</div>
      </h1>
      <div>
        <Board size={5} />
      </div>
    </div>
  );
}

export default App;
