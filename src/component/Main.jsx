import Easy from "./option page/Easy";
import Hard from "./option page/Hard";

const Main = ({
  colorOptions,
  win,
  colors,
  setWin,
  setVerdict,
  easyNewList,
  toggleHard,
}) => {
  return (
    <div
      className="main"
      style={{ backgroundColor: win ? `rgb(${colors})` : "" }}
    >
      {toggleHard ? (
        <Hard
          colorOptions={colorOptions}
          win={win}
          colors={colors}
          setWin={setWin}
          setVerdict={setVerdict}
        />
      ) : (
        <Easy
          easyNewList={easyNewList}
          win={win}
          colors={colors}
          setWin={setWin}
          setVerdict={setVerdict}
        />
      )}
    </div>
  );
};

export default Main;
