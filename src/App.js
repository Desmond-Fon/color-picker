import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import Section from "./component/Section";
import { useState } from "react";

function App() {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
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
  const easyOptions = [colorOptions[1], colorOptions[2], colorOptions[5]];
  const easyNewList = shuffle(easyOptions);
  const newList = shuffle(colorOptions);
  const [verdict, setVerdict] = useState("TRY AGAIN");
  const [win, setWin] = useState(false);
  const [toggleHard, setToggleHard] = useState(false);

  function refreshPage() {
    window.location.reload();
  }

  const newLevel = () => {
    setToggleHard(!toggleHard);
  };

  return (
    <div className="app">
      <Header headerColor={color} />
      <Section
        verdict={verdict}
        refreshPage={refreshPage}
        newLevel={newLevel}
        toggleHard={toggleHard}
      />
      <Main
        easyNewList={easyNewList}
        colorOptions={newList}
        win={win}
        colors={color}
        setWin={setWin}
        setVerdict={setVerdict}
        toggleHard={toggleHard}
      />
    </div>
  );
}

export default App;
