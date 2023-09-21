import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReplayIcon from '@mui/icons-material/Replay';
import { IconButton } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Specify from './Specify';

const Input = () => {
  let getPasswordFormat;
  const passwordFormat = (data) =>{
    getPasswordFormat = data;
  }

  const [password, setPassword] = useState("");
  const [checkLowercase, setLowercase] = useState(false);

  //When user changes the input
  const handlePassChange = (e) =>{
    setPassword(e.target.value);
  }

  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

  const generatePassword = () =>{
    let type = getRandom(1, 4);
    const lowercaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberList = "0123456789";
    const specCharList = "!@#$^&*%";

    let getLowercase = getPasswordFormat.getLowercase;
    const {getPassLength, getUppercase, getNumbers, getSpecChar} = getPasswordFormat;

    if(!(getLowercase || getUppercase || getNumbers || getSpecChar)){
      getPasswordFormat.getLowercase = true;
      setLowercase(true);
      getLowercase = true;
    }

    let pass = "";
    while(pass.length<getPassLength){
      if(type==1 && getLowercase){
        let rand = getRandom(0, 25);
        pass += lowercaseAlphabets[rand];
      }
      else if(type==2 && getUppercase){
        let rand = getRandom(0, 25);
        pass += uppercaseAlphabets[rand];
      }
      else if(type==3 && getNumbers){
        let rand = getRandom(0, 9);
        pass += numberList[rand];
      }
      else if(type==4 && getSpecChar){
        let rand = getRandom(0, 7);
        pass += specCharList[rand];
      }
      type = getRandom(1, 4);
    }
    setPassword(pass);
  }

  useEffect(()=>{
    generatePassword();
  }, []);

  const [copyState, setCopyState] = useState("Copy");
  const handleCopyClick = () =>{
    let copyText = password;
    navigator.clipboard.writeText(copyText);
    
    setCopyState("Copied");
    setTimeout(()=>{
      setCopyState("Copy");
    }, 1000);
  }
  return (
    <>
      <Main>
        <PassSection>
          <Password value={password} onChange={(e)=>handlePassChange(e)} placeholder="your password"/>
          <IconButton onClick={generatePassword}><ReplayIcon /></IconButton>
        </PassSection>
        <Button onClick={handleCopyClick}><FileCopyIcon fontSize={"small"}/><span>{copyState}</span></Button>
      </Main>
      <Specify sendData={passwordFormat} lowercase={checkLowercase}/>
    </>
  )
}

export default Input

const Main = styled.div`
  display: flex;
  margin-top: 3.5%;
`;

const PassSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  border: 1px solid black;
  height: 20px;
  padding: 10px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  padding-right: 5px;
`;

const Password = styled.input`
  border: none;
  outline: none;
`;

const Button = styled.button`
  background-color: #3cc;
  border: none;
  margin-left: 5%;
  width: 20%;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  span{
    margin-left: 5%;
    font-weight: 700;
  }

  &:hover{
    cursor: pointer;
  }
`;
