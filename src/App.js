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
    color
  ];

  const easyOptions = [colorOptions[1], colorOptions[2], colorOptions[5]]
  // console.log(colorOptions, easyOptions);

  const easyNewList = shuffle(easyOptions);
  const newList = shuffle(colorOptions);

  console.log(easyNewList);
  // window.location.reload();
  // window.location.reload(false);
  // const [headerColor, setHeaderColor] = useState(color);
  const [verdict, setVerdict] = useState('TRY AGAIN');
  const [win, setWin] = useState(false);

  const [toggleHard, setToggleHard] = useState(false)
 
  const [score, setScore] = useState(0);
  console.log(colorOptions);

  function refreshPage(){
    window.location.reload();
} 

const newLevel = () => {
  setToggleHard(!toggleHard)
}

  const getValue = (e) => {
    e.preventDefault()
    // console.log(e.target.id);
    console.log(e.currentTarget.id);
    if(e.currentTarget.id === color)
    {
      console.log('win');
      setWin(true)
      setVerdict('PLAY AGAIN')
      setScore(prevActiveStep => prevActiveStep + 1)
      return;
    }
    else{
      console.log('lose');
      // e.currentTarget.classList.add('hide');
    // setHide(true)
      if(score !== 0){

        setScore(prevActiveStep => prevActiveStep - 1)
      }
      setWin(false)
      return;
    }

  }

  return (
    <div className="app">
      <Header headerColor={color}/>
      <Section verdict={verdict} refreshPage={refreshPage} score={score} newLevel={newLevel} toggleHard={toggleHard}/>
      <Main easyNewList={easyNewList} colorOptions={newList} getValue={getValue} 
      // hide={hide}
       win={win} 
       colors={color} 
       setWin={setWin}
      //  setScore={setScore}
       setVerdict={setVerdict}
       toggleHard={toggleHard}
      //  setHide={setHide}
       />
    </div>
  );
}

export default App;
