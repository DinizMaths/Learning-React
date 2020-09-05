import React, { useState } from 'react';

import {
  StyledBody, 
  Screen, 
  Keybord, 
  KeybordButton, 
  KeybordClearButton, 
  KeybordZeroButton, 
  KeybordEqualButton, 
  KeybordDividesButton 
} from './styles';

function Calculator() {
  const [screen, setScreen] = useState('');
  const [operation, setOperation] = useState('');

  function onSubmitForm(event) {
    event.preventDefault();
  }

  function handleClickEqualButton() {
    const result = calculateTheResult(screen);
    setScreen(result);
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

  return(
    <StyledBody>
      <form onSubmit={onSubmitForm}>
        <Screen>
          <h1>{screen}</h1>
        </Screen>
        <Keybord>
          <KeybordClearButton onClick={handleClickClearButton}>C</KeybordClearButton>
          <KeybordEqualButton type="submit" onClick={handleClickEqualButton}>=</KeybordEqualButton>

          <KeybordButton value={7} onClick={handleGetValue}>7</KeybordButton>
          <KeybordButton value={8} onClick={handleGetValue}>8</KeybordButton>
          <KeybordButton value={9} onClick={handleGetValue}>9</KeybordButton>
          <KeybordButton value={'+'} onClick={handleGetOperation}>&#x2b;</KeybordButton>

          <KeybordButton value={4} onClick={handleGetValue}>4</KeybordButton>
          <KeybordButton value={5} onClick={handleGetValue}>5</KeybordButton>
          <KeybordButton value={6} onClick={handleGetValue}>6</KeybordButton>
          <KeybordButton value={'-'} onClick={handleGetOperation}>&#x2212;</KeybordButton>

          <KeybordButton value={1} onClick={handleGetValue}>1</KeybordButton>
          <KeybordButton value={2} onClick={handleGetValue}>2</KeybordButton>
          <KeybordButton value={3} onClick={handleGetValue}>3</KeybordButton>
          <KeybordButton value={'*'} onClick={handleGetOperation}>&#xd7;</KeybordButton>

          <KeybordZeroButton value={0} onClick={handleGetValue}>0</KeybordZeroButton>
          <KeybordDividesButton value={'/'} onClick={handleGetOperation}>&#xf7;</KeybordDividesButton>
        </Keybord>
      </form>
    </StyledBody>
  );
}

export default Calculator