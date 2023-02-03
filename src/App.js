import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import Section from "./component/Section";
// import {useState} from "React";

function App() {

  const color = [`${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`]


  return (
    <div>
      <Header color={color}/>
      <Section />
      <Main />
    </div>
  );
}

export default App;
