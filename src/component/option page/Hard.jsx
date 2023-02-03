import Individual from "./Individual";

const Hard = ({ colorOptions, getValue, hide, win }) => {
  return (
    <>
      <div className="hard">
        <div className="individual">
          {colorOptions.map((item) => {
            return <Individual getValue={getValue} hide={hide} item={item} win={win}/>;
          })}
        </div>
      </div>
    </>
  );
};

export default Hard;
