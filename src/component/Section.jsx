const Section = ({verdict, refreshPage, score}) => {
    return ( <div className="section">
        <div><button className="start" onClick={refreshPage}>
            {verdict}
            </button></div>
        {/* <div className="score"> */}
            {/* <p>SCORE</p> */}
            {/* <p className="score-number"> */}
            {/* {score} */}
            {/* </p></div> */}
        <div className="toggler">
            <p className="toggle-level">Toggle Level</p>
            <button className="level">
                Easy
            </button>
        </div>
    </div> );
}
 
export default Section;