import styled from 'styled-components';

export const StyledBody = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #252627;
`;

export const Screen = styled.div`
  height: 50px;
  width: 207px;
  border: 1px solid #C1C1C2;
  border-radius: 5px 5px 0 0;
  background-color: #CDCED1;
  margin-bottom: 3px;
  
  h1 {
    margin: 7px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 300;
  }
`;

export const Keybord = styled.div` 
  width: 209px;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(4, 1fr);
`;

export const KeybordButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  height: 50px;
  padding: 10px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color:#C1C1C2;
  }
`;

export const KeybordDividesButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  height: 50px;
  padding: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 0 0 5px 0;

  &:hover {
    background-color:#C1C1C2;
  }
`;

export const KeybordEqualButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  height: 50px;
  padding: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #1BF979;

  &:hover {
    background-color: #19DA6B;
  }
`;

export const KeybordZeroButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  height: 50px;
  padding: 10px;
  outline: none;
  border: none;
  grid-column: span 3;
  cursor: pointer;
  border-radius: 0 0 0 5px;

  &:hover {
    background-color:#C1C1C2;
  }
`;

export const KeybordClearButton = styled.button`
  background-color: #1BAFF9;
  font-size: 16px;
  font-weight: 400;
  height: 50px;
  padding: 10px;
  outline: none;
  border: none;
  grid-column: span 3;
  cursor: pointer;

  &:hover {
    background-color: #189BDC;
  }
`;
