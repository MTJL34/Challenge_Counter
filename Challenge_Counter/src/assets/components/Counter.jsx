import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Counter({ incrementValue }) {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount + incrementValue >= 20) {
                        clearInterval(interval);
                        setIsRunning(false);
                        return 20; 
                    }
                    return prevCount + incrementValue;
                });
            }, 1000); 
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, incrementValue]);

    
    const resetCounter = () => {
        setCount(0);
        setIsRunning(false);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Compteur : {count}</h2>
            <button
                onClick={() => setIsRunning(true)}
                disabled={isRunning || count === 20}
                style={buttonStyle}
            >
                Start
            </button>
            <button
                onClick={() => setIsRunning(false)}
                disabled={!isRunning}
                style={buttonStyle}
            >
                Stop
            </button>
            <button onClick={resetCounter} style={buttonStyle}>
                Reset
            </button>
        </div>
    );
}

const buttonStyle = {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
};

Counter.propTypes = {
    incrementValue: PropTypes.number.isRequired, // Définit que 'incrementValue' est un nombre requis
};

export default Counter;