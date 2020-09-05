import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #252627;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 5rem;
  margin: 200px 0 60px;

  &:focus {
    background-color: grey;
  }
`;
