import { useState } from "react";

const Individual = ({ item, colors, setWin, setVerdict, setScore }) => {

  const [hide, setHide] = useState(false);


  const getValues = (e) => {
    e.preventDefault()
    // console.log(e.target.id);
    console.log(e.currentTarget.id);
    if(e.currentTarget.id === colors)
    {
      console.log('win');
      setWin(true)
      // console.log(win);
      setVerdict('PLAY AGAIN')
      // setScore(prevActiveStep => prevActiveStep + 1)
      return;
    }
    else{
      console.log('lose');
      // e.currentTarget.classList.add('hide');
      setHide(true)
      // if(score !== 0){

        // setScore(prevActiveStep => prevActiveStep - 1)
      // }
      // setWin(false)
      // return;
    }

  }

  return (
    <>
    <button
        key={item.index}
        id={item}
        value={item}
        onClick={getValues}
        className="box"
        style={{ backgroundColor: hide ? `rgb(${item})` : ''}}
      >
        <p className="item">RGB({item})</p>
      </button>
    </>
  );
};

export default Individual;
