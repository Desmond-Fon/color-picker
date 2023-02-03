import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import Section from "./component/Section";
import { useState } from "react";

function App() {

  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

  const color = `${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}`;


  const colorOptions = [
    `${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}`,
    `${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}`,
    `${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}`,
    `${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}`,
    `${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}`,
    color,
  ];

  const newList = shuffle(colorOptions);

  // const [headerColor, setHeaderColor] = useState(color);
  const [verdict, setVerdict] = useState('PLAY AGAIN');
  const [win, setWin] = useState(false);
  const [hide, setHide] = useState(false);
  const [score, setScore] = useState(0);
  console.log(colorOptions);

  function refreshPage(){
    window.location.reload();
} 

  const getValue = (e) => {
    e.preventDefault()
    // console.log(e.target.id);
    console.log(e.currentTarget.id);
    if(e.currentTarget.id === color)
    {
      console.log('win');
      setWin(true)
      console.log(win);
      setVerdict('TRY AGAIN')
      setScore(prevActiveStep => prevActiveStep + 1)
    }
    else{
      console.log('lose');
      // e.currentTarget.classList.add('hide');
      setHide(true)
      if(score !== 0){

        setScore(prevActiveStep => prevActiveStep - 1)
      }
      setWin(false)
    }

  }

  return (
    <div>
      <Header headerColor={color}/>
      <Section verdict={verdict} refreshPage={refreshPage} score={score}/>
      <Main colorOptions={newList} getValue={getValue} hide={hide} win={win} colors={color}/>
    </div>
  );
}

export default App;
