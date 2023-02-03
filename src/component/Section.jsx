const Section = () => {
    return ( <div className="section">
        <div><button className="start">
            Play Again
            </button></div>
        <div className="score">
            <p>SCORE</p>
            <p className="score-number">
            0
            </p></div>
        <div className="toggler">
            <p className="toggle-level">Toggle Level</p>
            <button className="level">
                Easy
            </button>
        </div>
    </div> );
}
 
export default Section;