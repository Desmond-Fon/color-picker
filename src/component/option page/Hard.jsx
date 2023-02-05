import Individual from "./Individual";

const Hard = ({ colorOptions, getValue, hide, win, setWin, colors, setScore, setVerdict}) => {
  return (
    <>
    {win ? <h1 className="correct">CORRECT!</h1> :
      <div className="hard">
        <div className="individual">
          {colorOptions.map((item, index) => {
            return <Individual getValue={getValue} hide={hide} colors={colors} setVerdict={setVerdict} setScore={setScore} setWin={setWin} item={item} win={win} index={index} key={(Math.random() * 1000)}/>;
          })}
        </div>
      </div>}
    </>
  );
};

export default Hard;
