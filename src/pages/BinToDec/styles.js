import styled from 'styled-components';

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;

  background-color: #252627;

  input {
    margin: 15% 0 5%;
    transition: height 0.2s;

    &:focus {
      background-color: gray;
    }
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    color: white;
  }
`;