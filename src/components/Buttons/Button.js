import './Button.css';

export default function Button({ buttonText, onClick }) {
    return(
        <button className="helperButton" onClick={onClick}>
            {buttonText}
        </button>
    )
}
