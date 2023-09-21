import './App.css';
import styled from 'styled-components';

import Header from './components/Header';
import Input from './components/Input';

function App() {
  return (
    <Main>
      <Header />
      <Input />
    </Main>
  );
}

export default App;

const Main = styled.div`
  background-color: #fff;
  border: 1px solid #588b54;
  border-radius: 20px;
  margin: 2.6% auto 0;
  height: 90vh;
  width: 34vw;
  padding: 0 80px;
`;