import React, { useState } from 'react';

import Box from './components/Box';
import { StyledDiv, StyledInput } from './styles';

function BorderRadiusPrev() {
  const [radius, setRadius] = useState(0);

  return(
    <>
      <StyledDiv>
        <StyledInput 
          type="text" 
          value={radius} 
          onChange={(event) => setRadius(event.target.value)}
        />

        <Box id="styledDiv" radius={radius}/>
      </StyledDiv>
    </>
  );
}

export default BorderRadiusPrev;