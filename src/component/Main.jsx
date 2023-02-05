import Easy from "./option page/Easy";
import Hard from "./option page/Hard";

const Main = ({colorOptions, getValue, hide, win, colors, setWin, setVerdict, setScore, easyNewList, toggleHard}) => {


  return (
    <div className="main" style={{ backgroundColor: win ? `rgb(${colors})` : '' }}>
      {/* <Easy /> */}
      { toggleHard ? <Hard colorOptions={colorOptions} getValue={getValue} hide={hide} win={win} colors={colors} setWin={setWin} setScore={setScore} setVerdict={setVerdict}/> :
      <Easy easyNewList={easyNewList} getValue={getValue} hide={hide} win={win} colors={colors} setWin={setWin} setScore={setScore} setVerdict={setVerdict}/>}

{/* <Easy easyNewList={easyNewList} getValue={getValue} hide={hide} win={win} colors={colors} setWin={setWin} setScore={setScore} setVerdict={setVerdict}/> */}
    </div>
  );
};

export default Main;
