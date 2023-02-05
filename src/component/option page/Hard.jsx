import Individual from "./Individual";

const Hard = ({ colorOptions, win, setWin, colors, setVerdict }) => {
  return (
    <>
      {win ? (
        <h1 className="correct">CORRECT!</h1>
      ) : (
        <div className="hard">
          <div className="individual">
            {colorOptions.map((item, index) => {
              return (
                <Individual
                  colors={colors}
                  setVerdict={setVerdict}
                  setWin={setWin}
                  item={item}
                  win={win}
                  index={index}
                  key={Math.random() * 1000}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Hard;
