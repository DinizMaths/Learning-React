import React, { useState } from 'react';

import {
  StyledBody, 
  Screen, 
  Keyboard, 
  KeyboardButton, 
  KeyboardClearButton, 
  KeyboardZeroButton, 
  KeyboardEqualButton, 
  KeyboardDividesButton 
} from './styles';

function Calculator() {
  const [screen, setScreen] = useState('');
  const [operation, setOperation] = useState('');

  function onSubmitForm(event) {
    event.preventDefault();
  }

  
  function handleClickClearButton() {
    setScreen('');
  }

  function handleGetValue(event) {
    setScreen(screen + event.target.value);
  }
  
  function handleGetOperation(event) {
    setOperation(event.target.value);
    setScreen(screen + event.target.value);
  }

  function calculateTheResult(str) {
    const number1 = Number(str.slice(0, str.indexOf(operation)));
    //slices the string from the start until it finds a mathematical operation
    
    const number2 = Number(str.slice(str.indexOf(operation) + 1, str.length));
    //slices the string from the mathematical operation until the end
    
    let result;
    
    switch(operation) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        result = number1 / number2;
        break;
      default:
        result = 'ERROR';
        break;
    }
              
    return result.toString();
  }
            
  function handleClickEqualButton() {
    const result = calculateTheResult(screen);
    setScreen(result);
  }
  
  return(
    <StyledBody>
      <form onSubmit={onSubmitForm}>
        <Screen>
          <h1>{screen}</h1>
        </Screen>
        
        <Keyboard>
          <KeyboardClearButton onClick={handleClickClearButton}>C</KeyboardClearButton>
          <KeyboardEqualButton type="submit" onClick={handleClickEqualButton}>=</KeyboardEqualButton>

          <KeyboardButton value={7} onClick={handleGetValue}>7</KeyboardButton>
          <KeyboardButton value={8} onClick={handleGetValue}>8</KeyboardButton>
          <KeyboardButton value={9} onClick={handleGetValue}>9</KeyboardButton>
          <KeyboardButton value={'+'} onClick={handleGetOperation}>&#x2b;</KeyboardButton>

          <KeyboardButton value={4} onClick={handleGetValue}>4</KeyboardButton>
          <KeyboardButton value={5} onClick={handleGetValue}>5</KeyboardButton>
          <KeyboardButton value={6} onClick={handleGetValue}>6</KeyboardButton>
          <KeyboardButton value={'-'} onClick={handleGetOperation}>&#x2212;</KeyboardButton>

          <KeyboardButton value={1} onClick={handleGetValue}>1</KeyboardButton>
          <KeyboardButton value={2} onClick={handleGetValue}>2</KeyboardButton>
          <KeyboardButton value={3} onClick={handleGetValue}>3</KeyboardButton>
          <KeyboardButton value={'*'} onClick={handleGetOperation}>&#xd7;</KeyboardButton>

          <KeyboardZeroButton value={0} onClick={handleGetValue}>0</KeyboardZeroButton>
          <KeyboardDividesButton value={'/'} onClick={handleGetOperation}>&#xf7;</KeyboardDividesButton>
        </Keyboard>
      </form>
    </StyledBody>
  );
}

export default Calculator
