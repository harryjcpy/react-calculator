import Heading from './components/Heading';
import Display from './components/display';
import ButtonsContainer from './components/ButtonsContainer';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [calVal, setCalVal] = useState("");

  // Function to handle button clicks
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    } else if (buttonText === '=') {
      try {
        const result = eval(calVal);
        setCalVal(result.toString());
      } catch {
        setCalVal("Error");
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
      setCalVal(calVal.slice(0, -1));
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
    <Heading></Heading>
    <div className="calculator">
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
    </>
  );
}

export default App;

