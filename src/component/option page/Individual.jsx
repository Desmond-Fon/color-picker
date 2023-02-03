const Individual = ({ item, getValue, win }) => {
  return (
    <>
      <button
        key={Math.floor(Math.random() * 256)}
        id={item}
        value={item}
        onClick={getValue}
        className="box"
        style={{ backgroundColor: `rgb(${item})`, display: win ? '' : 'hidden' }}
      >
        <p className="item">RGB({item})</p>
      </button>
    </>
  );
};

export default Individual;
