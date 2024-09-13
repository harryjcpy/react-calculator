import Heading from './components/Heading';
import Display from './components/display';
import ButtonsContainer from './components/ButtonsContainer';
import EasterEgg from './components/EasterEgg'; // Import the new component
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [calVal, setCalVal] = useState("");
  const [showEasterEgg, setShowEasterEgg] = useState(false); // State to control the Easter Egg visibility

  // Function to handle button clicks
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
      setShowEasterEgg(false); // Hide Easter Egg when clearing
    } else if (buttonText === '=') {
      try {
        const result = eval(calVal);
        setCalVal(result.toString());

        // Check for the easter egg condition
        if (result === 7) {
          setShowEasterEgg(true); // Show the Easter Egg component
        } else {
          setShowEasterEgg(false); // Hide Easter Egg if the result is not 7
        }
      } catch {
        setCalVal("Error");
        setShowEasterEgg(false); // Hide Easter Egg on error
      }
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  // Function to handle keyboard inputs
  const handleKeyDown = (event) => {
    const { key } = event;

    if (key === 'Enter' || key === '=') {
      onButtonClick('=');
    } else if (key === 'Backspace') {
      setCalVal((prevVal) => prevVal.slice(0, -1));
    } else if (key === 'Delete' || key.toLowerCase() === 'c') {
      onButtonClick('C');
    } else if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
      onButtonClick(key);
    }
  };

  // Set up event listener for keyboard input
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [calVal]); // Dependency array includes `calVal` to update the effect when it changes

  return (
    <>
      <Heading />
      <div className="calculator">
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
        {showEasterEgg && <EasterEgg />} {/* Render the Easter Egg component conditionally */}
      </div>
    </>
  );
}

export default App;


