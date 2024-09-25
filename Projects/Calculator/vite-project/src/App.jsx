import React, { useState } from 'react';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import styles from './App.module.css';

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    // Simple example to handle input, this can be extended for operations
    if (buttonText === 'C') {
      setCalVal(""); // Clear the display
    } else if (buttonText === '=') {
      // Evaluate the expression
      try {
        setCalVal(eval(calVal).toString());
      } catch (e) {
        setCalVal("Error");
      }
    } else {
      setCalVal(prevVal => prevVal + buttonText);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
