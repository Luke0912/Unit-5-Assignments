// import logo from './logo.svg';
import './App.css';
import { Wrapper } from './components/Wrapper';
import {  useState } from 'react';

function App() {
  const [dOne,setOne] = useState(false)
  const [dTwo,setTwo] = useState(false)
  const [dThree,setThree] = useState(false)
  const [dFour,setFour] = useState(false)
  const [dFive, setFive] = useState(false)
  return (
    <div className="App">
      <Wrapper dOne={dOne} onClick={()=>{setOne(dOne===true?false:true)}}>Primary Button</Wrapper>
      <Wrapper dTwo={dTwo} onClick={()=>{setTwo(dTwo===true?false:true)}}>Default Button</Wrapper>
      <Wrapper dThree={dThree} onClick={()=>{setThree(dThree===true?false:true)}}>Dashed Button</Wrapper>
      <Wrapper dFour={dFour} onClick={()=>{setFour(dFour===true?false:true)}}>Task Button</Wrapper>
      <Wrapper dFive={dFive} onClick={()=>{setFive(dFive===true?false:true)}}>Link Button</Wrapper>
    </div>
  );
}

export default App;
