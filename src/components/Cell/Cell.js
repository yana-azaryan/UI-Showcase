import './Cell.css';

export default function Cell ({ cellIndex, isOn, toggleLight }) {
    return (
        <button 
            className={`cell ${ isOn ? 'lightOn' : 'lightOff' }`} 
            onClick={() => toggleLight(cellIndex)}
        />
    );
}
