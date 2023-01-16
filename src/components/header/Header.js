import "./Header.css";

const Header = ({ children, title = "" }) => {
  return (
    <div className="header-container">
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default Header;
