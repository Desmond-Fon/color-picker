import { useState } from "react";

const Individual = ({ item, colors, setWin, setVerdict }) => {
  const [hide, setHide] = useState(false);

  const getValues = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.id);
    if (e.currentTarget.id === colors) {
      setWin(true);
      setVerdict("PLAY AGAIN");
      return;
    } else {
      setHide(true);
    }
  };

  return (
    <>
      <button
        key={item.index}
        id={item}
        value={item}
        onClick={getValues}
        className="box"
        style={{ backgroundColor: hide ? `rgb(${item})` : "" }}
      >
        <p className="item">RGB({item})</p>
      </button>
    </>
  );
};

export default Individual;
