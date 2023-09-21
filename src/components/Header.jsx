import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Main>
      <GIF>
        <Img src="https://reactjs-password-generator.vercel.app/static/media/password.41b50a01b4d0a0f2c9ba.gif" alt="Password Gif" />
      </GIF>
      <Heading>PASSWORD GENERATOR</Heading>
      <Desc>Create strong and secure passwords to keep your account safe online.</Desc>
    </Main>
  )
}

export default Header

const Main = styled.div`
    display: flex;
    flex-direction: column;
`;

const GIF = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3.5%;
`;

const Img = styled.img`
    height: 150px;
    width: 150px;
`;

const Heading = styled.p`
    margin: 2% auto 0;
    font-size: 26px;
    font-weight: 700;
`;

const Desc = styled.p`
    color: #202020;
    font-size: 16px;
    text-align: center;
    margin: 0;
    margin-top: 2%;
`;