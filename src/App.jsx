import Heading from './components/Heading';
import Display from './components/display';
import ButtonsContainer from './components/ButtonsContainer';
import EasterEgg from './components/EasterEgg'; 
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [calVal, setCalVal] = useState("");
  const [showEasterEgg, setShowEasterEgg] = useState(false); 
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
      setShowEasterEgg(false); 
    } else if (buttonText === '=') {
      try {
        const result = eval(calVal);
        setCalVal(result.toString());

       
        if (result === 7) {
          setShowEasterEgg(true); 
        } else {
          setShowEasterEgg(false); 
        }
      } catch {
        setCalVal("Error");
        setShowEasterEgg(false); 
      }
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

 
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

 
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [calVal]); 

  return (
    <>
      <Heading />
      <div className="calculator">
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
        {showEasterEgg && <EasterEgg />} 
      </div>
    </>
  );
}

export default App;


