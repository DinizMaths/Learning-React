import React, { useState } from 'react';

import { StyledMain } from './styles';

function BinToDec() {
  const [result, setResult] = useState('');

  function converterBinToDec(event) {
    let bin = event.target.value;

    if(bin === '') {
      setResult('');
    } else {
      let num = 0;

      for(let i = 0, j = bin.length - 1; i < bin.length; i++, j--) {
        num += ( Number(bin[j]) * Math.pow(2, i));
      }

      setResult(num);
    }
  }

  return (
    <StyledMain>
      <input type="text" onChange={converterBinToDec}/>
      <h1>
        { result }
      </h1>
    </StyledMain>
  );
}

export default BinToDec;
