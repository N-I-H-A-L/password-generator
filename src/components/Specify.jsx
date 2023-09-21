import React,{ useState } from 'react';
import styled from 'styled-components';
import { Slider, Checkbox } from '@mui/material';

const Specify = (props) => {
  const [passLength, setPassLength] = useState(10);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(true);
  const [specChar, setSpecChar] = useState(false);
  
  props.sendData({
    getPassLength: passLength,
    getUppercase: uppercase,
    getLowercase: lowercase,
    getNumbers: numbers,
    getSpecChar: specChar
  });
  
  const handleUppercase = (e) =>{
    const checked = e.target.checked;
    setUppercase(checked);
  }
  
  const handleLowercase = (e) =>{
    const checked = e.target.checked;
    setLowercase(checked);
    if(props.lowercase) setLowercase(true);
  }

  const handleNumbers = (e) =>{
    const checked = e.target.checked;
    setNumbers(checked);
  }

  const handleSpecChar = (e) =>{
    const checked = e.target.checked;
    setSpecChar(checked);
  }

  const handleSliderChange = (e) =>{
    setPassLength(e.target.value);
  }

  return (
    <Main>
      <PassLen>Password Length: {passLength}</PassLen>
      <Slider
        defaultValue={10}
        step={1}
        min={5}
        max={30}
        onChange={(e) => handleSliderChange(e)}
        sx={{
          '& .MuiSlider-thumb': {
              color: "#3cc",
              border: "1px solid black"
          },
          '& .MuiSlider-track': {
              color: "#3cc"
          },
          '& .MuiSlider-rail': {
              color: "white",
              border: "1px solid black"
          },
          '& .MuiSlider-active': {
              color: "#3cc"
          }
      }}
      style={{height: "7px"}}
      />
      
      <Uppercase>
        <p>Uppercase</p>
        <Checkbox onClick={(e)=>handleUppercase(e)} defaultChecked style={{color: "#3cc", 
                          borderRadius: "20px",
                          width: "10%"
                        }}
        />
      </Uppercase>

      <Lowercase>
        <p>Lowercase</p>
        <Checkbox checked={lowercase} onClick={(e)=>handleLowercase(e)} style={{color: "#3cc", 
                          borderRadius: "20px",
                          width: "10%"
                        }}
        />                        
      </Lowercase>

      <Numbers>
        <p>Numbers</p>
        <Checkbox onClick={(e)=>handleNumbers(e)} defaultChecked style={{color: "#3cc", 
                            borderRadius: "20px",
                            width: "10%"
                          }}
        />
      </Numbers>

      <SpecChar>
        <p>Special Characters</p>                          
        <Checkbox onClick={(e)=>handleSpecChar(e)} style={{color: "#3cc", 
                              borderRadius: "20px",
                              width: "10%",
                            }}
        />
      </SpecChar>
      
    </Main>
  )
}

export default Specify

const Main = styled.div`

`;

const PassLen = styled.p`
  margin-top: 5%;
`;

const Uppercase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Lowercase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SpecChar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;