const Header = ({color}) => {
  return (
    <>
      <h1 className="App header" style={{backgroundColor: `rgb(${color})`}}>COLOR CODE : RGB ({color})</h1>
    </>
  );
};

export default Header;
