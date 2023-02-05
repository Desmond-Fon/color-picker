const Header = ({ headerColor }) => {
  return (
    <>
      <h1
        className="App header"
        style={{ backgroundColor: `rgb(${headerColor})` }}
      >
        MATCH THIS COLOR{" "}
      </h1>
    </>
  );
};

export default Header;
