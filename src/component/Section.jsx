const Section = ({ verdict, refreshPage, newLevel, toggleHard }) => {
  return (
    <div className="section">
      <div>
        <button className="start" onClick={refreshPage}>
          {verdict}
        </button>
      </div>
      <div className="toggler">
        <p className="toggle-level">Toggle Level</p>
        <button className="level" onClick={newLevel}>
          {toggleHard ? "EASY" : "HARD"}
        </button>
      </div>
    </div>
  );
};

export default Section;
